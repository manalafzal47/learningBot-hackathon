import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center">
      {/* Navigation Bar */}
      <nav className="w-full flex justify-between items-center py-4 px-8 bg-black bg-opacity-50 fixed top-0">
        <div className="text-2xl font-bold">JAMS</div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col justify-center items-center text-center h-screen px-4">
        <h1 className="text-6xl font-extrabold mb-6 animate-fadeIn">
          Converse with Your AI-Powered Voice Assistant
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto animate-fadeIn delay-2s">
          Engage in seamless, lifelike conversations with JAMS, your AI companion. Speak naturally and let the AI understand and respond in real-time.
        </p>
        <button className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 animate-fadeIn delay-3s">
          Start Talking
        </button>
      </header>

      {/* Features Section */}
      <section className="mt-20 px-4 lg:px-0 max-w-5xl text-center">
        <h2 className="text-4xl font-semibold mb-12 animate-fadeIn">Why Choose JAMS?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 animate-fadeIn delay-4s">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <h3 className="text-2xl font-bold mb-4">Natural Conversation</h3>
            <p>
              Experience smooth, human-like conversations with our advanced AI that understands and responds to your voice in real-time.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <h3 className="text-2xl font-bold mb-4">Multi-Language Interaction</h3>
            <p>
              Converse in multiple languages and let JAMS adapt to your preferred language effortlessly.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <h3 className="text-2xl font-bold mb-4">Smart Context Awareness</h3>
            <p>
              JAMS remembers the context of your conversation, allowing for a more personalized and relevant interaction.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mt-32 px-4 lg:px-0 max-w-5xl text-center">
        <h2 className="text-4xl font-semibold mb-12 animate-fadeIn delay-6s">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 animate-fadeIn delay-7s text-left">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <h3 className="text-2xl font-bold mb-4">1. Start Speaking</h3>
            <p>Press the talk button and speak to JAMS. The AI listens and processes your input instantly.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <h3 className="text-2xl font-bold mb-4">2. Real-Time Response</h3>
            <p>JAMS analyzes your speech and responds in real-time, creating a natural conversation flow.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <h3 className="text-2xl font-bold mb-4">3. Continuous Learning</h3>
            <p>JAMS improves with every interaction, learning from your preferences to provide even better responses over time.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-32 px-4 lg:px-0 max-w-5xl text-center">
        <h2 className="text-4xl font-semibold mb-12 animate-fadeIn delay-8s">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fadeIn delay-9s">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <p className="text-lg mb-4">"JAMS has transformed the way I interact with technology. The conversations feel so real!"</p>
            <p className="font-semibold">- Alex Johnson</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <p className="text-lg mb-4">"The ability to switch between languages seamlessly is a game-changer for my global team."</p>
            <p className="font-semibold">- Maria Gonzalez</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mt-32 mb-32 px-4 lg:px-0 max-w-5xl text-center">
        <h2 className="text-4xl font-semibold mb-12 animate-fadeIn delay-10s">Ready to Start Talking?</h2>
        <p className="text-lg mb-8 animate-fadeIn delay-11s">
          Engage in a lifelike conversation with JAMS today. Experience the future of voice interaction.
        </p>
        <button className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 animate-fadeIn delay-12s">
          Try It Now
        </button>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-gray-900 text-center text-white animate-fadeIn delay-13s">
        <p className="text-sm">
          © 2024 JAMS. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
