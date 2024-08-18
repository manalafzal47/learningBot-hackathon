from fastapi import FastAPI, UploadFile
from transformers import AutoModelForSpeechSeq2Seq, AutoProcessor, pipeline
import torch
import os
import json
from openai import OpenAI
from io import BytesIO
from starlette.responses import StreamingResponse
from dotenv import load_dotenv  

# Load the environment variables from the .env file  
load_dotenv()  

app = FastAPI()

model = None
processor = None
pipe = None
client = OpenAI(api_key=os.getenv('OPEN_AI_KEY'))

system_prompt = "You are a friendly and engaging language learning assistant designed to help bilingual children learn and practice two languages. Your name is LingoBuddy. The user is a young child, and you should switch between the two languages (as specified by the user) in your responses. Keep your answers short, fun, and interactive. Include simple language exercises, like word matching, fill-in-the-blank, and basic conversational practice. Be patient, encouraging, and occasionally playful."

@app.on_event("startup")
async def startup_event():
    global model, processor, pipe
    device = "cuda:0" if torch.cuda.is_available() else "cpu"
    torch_dtype = torch.float16 if torch.cuda.is_available() else torch.float32

    model_id = "openai/whisper-medium"

    print("Starting model initialization...")
    try:
        model = AutoModelForSpeechSeq2Seq.from_pretrained(
            model_id, torch_dtype=torch_dtype, low_cpu_mem_usage=True, use_safetensors=True
        )
        print("Model loaded.")

        processor = AutoProcessor.from_pretrained(model_id)
        print("Processor loaded.")

        pipe = pipeline(
            "automatic-speech-recognition",
            model=model,
            tokenizer=processor.tokenizer,
            feature_extractor=processor.feature_extractor,
            torch_dtype=torch_dtype,
            device=device,
        )
        print("Pipeline created.")
    except Exception as e:
        print(f"Error during startup: {e}")
    print("Startup complete.")

@app.post('/talk')
async def post_audio(file: UploadFile):
    global pipe
    if pipe is None:
        raise RuntimeError("Model pipeline is not initialized.")
    
    audio_file = await file.read()  # Read file content as bytes
    result = pipe(audio_file)
    transcription = result["text"]

    # Send the transcription to GPT and get the response
    gpt_response = get_chat_response({"role": "user", "content": transcription})

    return {'message': 'transcription done', 'transcription': transcription, 'gpt_response': gpt_response["content"]}

def get_chat_response(user_message):
    messages = load_messages()
    messages.append(user_message)

    try:
        # Create a chat completion request to the OpenAI API
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "system", "content": system_prompt}] + messages,
            stream=True  # Enable streaming responses
        )

        # Initialize an empty string to accumulate the response content
        gpt_response_content = ""

        # Create a buffer to collect the response chunks
        buffer = BytesIO()

        # Collect the response chunks
        for chunk in response:
            if 'choices' in chunk:
                delta = chunk['choices'][0].get('delta', {})
                content = delta.get('content', '')
                buffer.write(content.encode('utf-8'))

        # Prepare the final response object
        gpt_response_content = buffer.getvalue().decode('utf-8')
        gpt_response = {"role": "assistant", "content": gpt_response_content}

        # Save the conversation history after the full response is collected
        save_messages(user_message, gpt_response)

    except Exception as e:
        print(f"Error in GPT API call: {e}")
        gpt_response = {"role": "assistant", "content": "Sorry, something went wrong with the AI response."}
        save_messages(user_message, gpt_response)  # Save even in case of error

    return gpt_response

def load_messages():
    messages = []
    file = 'database.json'

    if os.path.exists(file) and os.stat(file).st_size > 0:
        with open(file) as db_file:
            messages = json.load(db_file)
    else:
        messages.append({"role": "system", "content": system_prompt})

    return messages

def save_messages(user_message, gpt_response):
    file = 'database.json'
    messages = load_messages()

    # Append the new user message
    messages.append(user_message)
    if gpt_response:
        messages.append(gpt_response)

    # Try writing back to the file
    try:
        with open(file, 'w') as f:
            json.dump(messages, f, indent=2)
        print(f"Data saved: {user_message}")
    except Exception as e:
        print(f"Error saving data: {e}")

@app.get("/")
async def root():
    return {"message": "Hello World"}
