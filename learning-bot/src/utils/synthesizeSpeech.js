import { ElevenLabsClient, ElevenLabs } from 'elevenlabs';

const synthesizeSpeech = async (text) => {
  const client = new ElevenLabsClient({ apiKey: process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY });

  try {
    const response = await client.textToSpeech.convert("pMsXgVXv3BLzUgSXRplE", {
      optimize_streaming_latency: ElevenLabs.OptimizeStreamingLatency.Zero,
      output_format: ElevenLabs.OutputFormat.Mp32205032,
      text: text,
      voice_settings: {
        stability: 0.1,
        similarity_boost: 0.3,
        style: 0.2,
      },
    });

    console.log('Full API response:', response);

    // Check and adjust this line based on the actual response structure
    return response.audio_url || response.data.audio_url || response.data.someNestedField.audio_url;
  } catch (error) {
    console.error('Error synthesizing speech:', error);
    return null;
  }
};

export default synthesizeSpeech;
