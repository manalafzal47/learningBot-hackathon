'use client';

import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faStop } from "@fortawesome/free-solid-svg-icons";

const Chatbot = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    const handleToggleRecording = async () => {
        if (isRecording) {
            // Stop recording
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        } else {
            // Start recording
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                mediaRecorderRef.current = new MediaRecorder(stream);
                mediaRecorderRef.current.ondataavailable = event => {
                    audioChunksRef.current.push(event.data);
                };
                mediaRecorderRef.current.onstop = () => {
                    const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                    const url = URL.createObjectURL(audioBlob);
                    setAudioUrl(url);
                    audioChunksRef.current = []; // Clear the chunks
                };
                mediaRecorderRef.current.start();
                setIsRecording(true);
            } catch (err) {
                console.error('Error accessing microphone', err);
            }
        }
    };

    return (
        <div className="min-h-screen bg-light-yellow text-dark-blue flex flex-col items-center inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:8rem_4rem] font-skrapbook">
            
            {/* Navigation Bar */}
            <div className="text-2xl font-skrapbook font-bold text-yellow mt-4">
                Talkaroo
            </div>

            {/* Chatbot Face Section */}
            <header className="flex flex-col justify-start items-center text-center h-screen px-4 pt-24">
                <div className="mt-10 relative w-100 h-100 mb-6 rounded-full bg-light-yellow flex items-center justify-center">
                    <img src="/talk-close.png" alt="Chatbot Face" className="w-72 h-72" />
                </div>
                <h1 className="text-4xl text-yellow font-extrabold mb-6">
                    Press the button to start recording!
                </h1>
                <button 
                    onClick={handleToggleRecording} 
                    className="hover-gradient text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 animate-fadeIn delay-3s"
                >
                    <FontAwesomeIcon icon={isRecording ? faStop : faMicrophone} className="h-5 w-5" />
                </button>
                {audioUrl && (
                    <div className="mt-4">
                        <h2 className="text-2xl">Recorded Audio:</h2>
                        <audio controls src={audioUrl}></audio>
                        <a href={audioUrl} download="recording.mp3" className="block mt-2 text-blue-500 underline">
                            Download as MP3
                        </a>
                    </div>
                )}
            </header>

            {/* How It Works Section */}
            <section className="mb-20 mt-10 px-4 lg:px-0 max-w-5xl text-center">
                <h2 className="text-4xl font-semibold mb-12 text-dark-blue">How I Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
                    <div className="bg-light-yellow p-8 rounded-lg shadow-lg hover:bg-blue transition duration-300 text-dark-blue">
                        <h3 className="text-2xl font-bold mb-4">1. Record Your Voice</h3>
                        <p>Press the record button and speak. I'll listen attentively.</p>
                    </div>
                    <div className="bg-light-yellow p-8 rounded-lg shadow-lg hover:bg-blue transition duration-300 text-dark-blue">
                        <h3 className="text-2xl font-bold mb-4">2. Real-Time Responses</h3>
                        <p>I'll analyze your speech and respond instantly for a smooth conversation.</p>
                    </div>
                    <div className="bg-light-yellow p-8 rounded-lg shadow-lg hover:bg-blue transition duration-300 text-dark-blue">
                        <h3 className="text-2xl font-bold mb-4">3. Personalization</h3>
                        <p>The more you talk to me, the better I understand you, making our chats more personalized!</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full py-8 bg-yellow text-center text-light-yellow">
                <p className="text-sm">
                    © 2024 Talkaroo. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Chatbot;
