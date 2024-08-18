// 'use client';

// import React, { useState } from 'react';
// import synthesizeSpeech from '../../utils/synthesizeSpeech';

// const ElevenLabsSpeech = () => {
//   const [text, setText] = useState('It sure does, Jackie… My mama always said: “In Carolina, the air\'s so thick you can wear it!”');
//   const [audioUrl, setAudioUrl] = useState(null);

//   const handleSynthesize = async () => {
//     const url = await synthesizeSpeech(text);
//     console.log('Received audio URL:', url); // Should now log the correct audio URL
//     setAudioUrl(url);

//     if (url) {
//       const audio = new Audio(url);
//       audio.play().catch(error => console.error('Audio playback failed:', error));
//     }
//   };

//   return (
//     <div>
//       <h1>ElevenLabs Text-to-Speech</h1>
//       <textarea
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         rows="4"
//         cols="50"
//         placeholder="Enter text to synthesize"
//       />
//       <button onClick={handleSynthesize}>
//         Synthesize Speech
//       </button>
//       {audioUrl && (
//         <div>
//           <p>Playing audio...</p>
//           <audio controls src={audioUrl} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ElevenLabsSpeech;


'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faStop } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';

// import synthesizeSpeech from '../../utils/synthesizeSpeech'; // Adjust the import path as needed

const Chatbot = () => {
    // const [text, setText] = useState('');
    // const [audioUrl, setAudioUrl] = useState(null);
    // const [isRecording, setIsRecording] = useState(false);

    // const handleTextChange = (e) => {
    //     setText(e.target.value);
    // };

    // const handleSynthesize = async () => {
    //     if (text.trim() === '') return; // Prevent sending empty text
    //     setIsRecording(true);
    //     const url = await synthesizeSpeech(text);
    //     setAudioUrl(url);
    //     const audio = new Audio(url);
    //     audio.play();
    //     setIsRecording(false);
    // };

    // const handleStop = () => {
    //     setIsRecording(false);
    //     if (audioUrl) {
    //         const audio = new Audio(audioUrl);
    //         audio.pause();
    //     }
    // };

    return (
        <div className="min-h-screen bg-light-yellow text-dark-blue flex flex-col items-center inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:8rem_4rem] font-skrapbook">
            
            {/* Navigation Bar */}
            <div className="text-2xl font-skrapbook font-bold text-yellow mt-4">
                Talkaroo
            </div>

            {/* Chatbot Face Section */}
            <header className="flex flex-col justify-start items-center text-center h-screen px-4 pt-24">
                <div className="mt-10 relative w-100 h-100 mb-6 rounded-full bg-light-yellow flex items-center justify-center">
                    <Image src="/talk-close.png" alt="Chatbot Face" className="w-72 h-72" />
                </div>
                <h1 className="text-4xl text-yellow font-extrabold mb-6">
                    Enter text and press &quot;Send&quot; to hear it!
                </h1>
                
                {/* Input Field for Text
                <div className="flex flex-col items-center space-y-4 mb-8">
                    <input
                        type="text"
                        value={text}
                        onChange={handleTextChange}
                        className="text-dark-blue px-4 py-2 rounded-lg border border-dark-blue w-80"
                        placeholder="Type your message..."
                    />
                    <button 
                        onClick={handleSynthesize} 
                        disabled={isRecording} 
                        className="hover-gradient text-white font-semibold py-2 px-8 rounded-full shadow-lg transition duration-300 animate-fadeIn delay-3s"
                    >
                        Send
                    </button>
                </div> */}

                <div className="flex space-x-4">
                    <button 
                        // onClick={handleSynthesize} 
                        // disabled={isRecording} 
                        className="hover-gradient text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 animate-fadeIn delay-3s"
                    >
                        <FontAwesomeIcon icon={faMicrophone} className="h-5 w-5" />
                    </button>
                    <button 
                        // onClick={handleStop} 
                        className="hover-gradient text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 animate-fadeIn delay-3s"
                    >
                        <FontAwesomeIcon icon={faStop} className="h-5 w-5" />
                    </button>
                </div>
            </header>

            {/* How It Works Section */}
            <section className="mb-20 mt-10 px-4 lg:px-0 max-w-5xl text-center">
                <h2 className="text-4xl font-semibold mb-12 text-dark-blue">How I Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
                    <div className="bg-light-yellow p-8 rounded-lg shadow-lg hover:bg-blue transition duration-300 text-dark-blue">
                        <h3 className="text-2xl font-bold mb-4">1. Record Your Voice</h3>
                        <p>Press the record button and speak. I&apos;ll listen attentively.</p>
                    </div>
                    <div className="bg-light-yellow p-8 rounded-lg shadow-lg hover:bg-blue transition duration-300 text-dark-blue">
                        <h3 className="text-2xl font-bold mb-4">2. Real-Time Responses</h3>
                        <p>I&apos;ll analyze your speech and respond instantly for a smooth conversation.</p>
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
