import React from 'react';
import image from '../assets/figma.png';
import image2 from '../assets/about-img.png';
import { PiArrowBendUpRightThin } from "react-icons/pi";
import { IoCloudUploadOutline } from "react-icons/io5";
import FadeInSection from './FadeInSection';

const About = () => {
  return (
    <div>
      <section className="bg-yellow-50 py-20 shadow-inner relative overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection direction='down'>
            <div className="max-w-4xl mx-auto text-center mb-14">
              <div className="uppercase text-orange-500 tracking-wide font-semibold text-xs mb-2">
                🚀 HOW DESIGNO WORKS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold max-w-lg mx-auto text-gray-800">
                See how our platform converts your designs quickly and precisely
              </h2>
            </div>
          </FadeInSection>
          

         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
           <FadeInSection direction='left'>
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow flex flex-col items-center text-center space-y-4 sm:space-y-5">
                <div className="w-full max-w-xs sm:max-w-sm bg-stone-100 p-4 rounded-lg flex justify-between items-center">
                  <img src={image} alt="" className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]" />
                  <PiArrowBendUpRightThin size={24} className="text-gray-400 sm:size-30" />
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-slate-200 flex items-center justify-center p-2">
                    <IoCloudUploadOutline size={30} className="text-gray-400 sm:size-40" />
                  </div>
                </div>
                <div className="font-semibold text-orange-500 text-sm sm:text-base">
                  Upload your design files from Figma to Designo
                </div>
                <p className="text-xs sm:text-sm text-gray-700 max-w-xs">
                  Upload your design files in .fig format since we currently work exclusively with Figma.
                </p>
                <a href="#" className="text-orange-500 font-semibold text-xs hover:underline">
                  Learn more &rarr;
                </a>
              </div>
           </FadeInSection>
            

            <FadeInSection direction='right'>
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow flex flex-col items-center text-center space-y-4 sm:space-y-5">
                  <div className="w-full max-w-xs sm:max-w-sm bg-stone-100 p-4 rounded-lg flex justify-center items-center">
                    <img src={image2} alt="" className="max-w-full h-auto" />
                  </div>
                  <div className="font-semibold text-orange-500 text-sm sm:text-base">
                    Our system converts your design into clean, reusable code
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 max-w-xs">
                    Get HTML, CSS, and JavaScript outputs that you can directly use or customize.
                  </p>
                  <a href="#" className="text-orange-500 font-semibold text-xs hover:underline">
                    Learn more &rarr;
                  </a>
                </div>
            </FadeInSection>
           
          </div>

          
          <div className="flex flex-col sm:flex-row justify-center mt-12 space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
              Get Started
            </button>
            <button className="flex items-center justify-center space-x-2 text-orange-500 font-semibold hover:underline">
              <svg className="w-5 h-5 rotate-90" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14.752 11.168l-4.586-4.586m0 0l-4.586 4.586m4.586-4.586v12.672" />
              </svg>
              <span>How it works</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
