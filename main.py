from fastapi import FastAPI, UploadFile
from transformers import AutoModelForSpeechSeq2Seq, AutoProcessor, pipeline
import torch
import os

app = FastAPI()

model = None
processor = None
pipe = None

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

    return {'message': 'transcription done', 'transcription': transcription}

@app.get("/process_local_audio")
async def process_local_audio():
    global pipe
    if pipe is None:
        raise RuntimeError("Model pipeline is not initialized.")

    # Absolute path to the audio file
    file_path = os.path.join(os.getcwd(), "learning-bot/test-1.mp3")

    # Ensure the file exists
    if not os.path.isfile(file_path):
        return {"error": "File not found", "file_path": file_path}

    with open(file_path, "rb") as f:
        audio_file = f.read()  # Read the file as bytes

    result = pipe(audio_file)
    transcription = result["text"]

    return {'message': 'transcription done', 'transcription': transcription}

@app.get("/")
async def root():
    return {"message": "Hello World"}
