import React, { useState, useEffect } from 'react';
import FadeInSection from './FadeInSection';

const Hero = () => {
  const words = ["code", "HTML", "React", "Tailwind", "components", "UI"];
  const [textIndex, setTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const typingSpeed = 500;
  const pauseBeforeNextWord = 5000;

  useEffect(() => {
    const currentWord = words[textIndex];
    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setTypedText("");
        setTextIndex((prev) => (prev + 1) % words.length);
      }, pauseBeforeNextWord);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex, words]);

  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 lg:pt-24 pb-20 text-center bg-white relative overflow-x-hidden">
      <FadeInSection direction="up">
        <div className="inline-block text-xs font-semibold text-blue-400 tracking-widest mb-3">
          🔥 PLATFORM FOR DESIGNERS
        </div>
      </FadeInSection>

      <FadeInSection direction="up">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-4xl mx-auto mb-4">
          Convert your <span className="gradient-text text-green-500">designs</span> to{" "}
          <span className="text-orange-500">{`{${typedText}}`}</span> swiftly and perfectly
        </h1>
      </FadeInSection>

      <FadeInSection direction="right">
        <p className="max-w-2xl mx-auto text-gray-700 mb-7 text-sm md:text-base">
          Instantly transform your design files into clean, ready-to-use frontend code. No more waiting, just upload and get your outputs.
        </p>
      </FadeInSection>

      <FadeInSection direction="left">
        <div className="flex justify-center space-x-4 mb-12">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition font-semibold">
            Start Now
          </button>
          <button className="flex items-center space-x-2 text-orange-500 border border-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14.752 11.168l-4.586-4.586m0 0l-4.586 4.586m4.586-4.586v12.672" />
            </svg>
            <span>How it works</span>
          </button>
        </div>
      </FadeInSection>

        <div className="relative max-w-[500px] mx-auto bg-yellow-50 rounded-3xl shadow-lg px-10 py-8 text-left font-mono text-[10px] lg:text-sm md:text-sm tracking-wide text-gray-900 z-[10]">
          <pre><code>{`public function convertDesign() {
  $this->load->model('design_model');
  $data['designs'] = $this->design_model->fetch();
  if(count($data['designs']) <= 0){
    $this->load->view('design/no_design_found');
  }
}`}</code></pre>
        </div>
        <div className='relative lg:max-w-[480px] lg:left-[30%] md:max-w-[460px] md:left-[18%] rotate-2 md:-mt-14 lg:-mt-12 -mt-12 z-[2] max-auto bg-slate-300 rounded-3xl shadow-lg px-10 py-8'></div>
        <div className='relative lg:max-w-[460px] lg:left-[30%] md:max-w-[460px] md:left-[17%] rotate-3 -mt-14 z-[1] max-auto bg-slate-400 rounded-3xl shadow-lg px-10 py-8'></div>
    </section>
  );
};

export default Hero;
