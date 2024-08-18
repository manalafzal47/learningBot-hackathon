
import React from "react";
import Link from "next/link";
import Image from 'next/image';



const HomePage = () => {
  return (
    <div className="min-h-screen bg-light-yellow text-dark-blue flex flex-col items-center inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:8rem_4rem] font-skrapbook">
      {/* Background Grid */}
      <div className="absolute bg-light-yellow inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:8rem_4rem]"></div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
      {/* Navigation Bar */}
      <div className="text-2xl font-skrapbook font-bold text-yellow mt-4">Talkaroo</div>

      {/* Hero Section */}
      <header className=" flex flex-col justify-center items-center text-center h-screen px-4">
      <Image src="/talkaroo.gif" alt="Talkaroo" width={256} height={256} className="w-64 h-64 mb-6" />
        <h1 className="text-6xl text-yellow font-extrabold mb-6 animate-fadeIn">
        🦘 Hi! I&apos;m Talkaroo! 🦘   
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto animate-fadeIn delay-2s">
          I can speak many different languages 😄 Do you wanna to know many languages too? 
        </p>
        <Link href="/chatbot">
            <button className=" hover-gradient text-whitey font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 animate-fadeIn delay-3s">
                Let&apos;s Chat 💙
            </button>
        </Link>
      </header>


      {/* How I Work */}
      <section className="mt-32 px-4 lg:px-0 max-w-5xl text-center">
      <div className="absolute bg-light-yellow inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:8rem_4rem]"></div>

        <h2 className="text-4xl font-semibold mb-12 animate-fadeIn delay-6s text-dark-blue">Here&apos;s what I can do 🤓</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 animate-fadeIn delay-7s text-left">
          <div className="bg-light-yellow p-8 rounded-lg shadow-lg hover:bg-blue transition duration-300 text-dark-blue">
            <h3 className="text-2xl font-bold mb-4">1. Talk to me</h3>
            <p>Press the talk button and speak to me. I can Listen.</p>
          </div>
          <div className="bg-light-yellow p-8 rounded-lg shadow-lg hover:bg-blue transition duration-300 text-dark-blue">
            <h3 className="text-2xl font-bold mb-4">2. I&apos;ll Talk Back</h3>
            <p>Talkaroo analyzes your speech and responds in real-time, creating a natural conversation flow.</p>
          </div>
          <div className="bg-light-yellow p-8 rounded-lg shadow-lg hover:bg-blue transition duration-300 text-dark-blue">
            <h3 className="text-2xl font-bold mb-4">3. Let Me Get To Know You Better</h3>
            <p>The more you talk to me, the more I get to know you, making learning funner and funner every day!</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-32 mb-32 px-4 lg:px-0 max-w-5xl text-center">
        <h2 className="text-4xl font-semibold mb-12 animate-fadeIn delay-10s text-dark-blue">Can&apos;t wait to talk to you 😄</h2>
        <p className="text-lg mb-8 animate-fadeIn delay-11s text-dark-blue">
          What are you waiting for, talk to me pleaseee pretty pleasee
        </p>
        <Link href="/chatbot">
        <button className=" hover-gradient text-whitey font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 animate-fadeIn delay-3s">
          Start Talking 💬
        </button>
        </Link>


      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-yellow text-center text-light-yellow animate-fadeIn delay-13s">
        <p className="text-sm">
          © 2024 Talkaroo. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
