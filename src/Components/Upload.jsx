import React from 'react';
import { IoCheckmark, IoCloudUploadOutline } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
import FadeInSection from './FadeInSection';

const Upload = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative overflow-x-hidden bg-white">
      <FadeInSection direction="left">
        <div>
          <h2 className="text-3xl lg:text-5xl md:text-4xl font-extrabold mb-4">
            Simply upload your file, <span className="gradient-text text-green-500">Designo</span> will handle the conversion
          </h2>
          <p className="text-gray-700 max-w-lg mb-6 text-sm">
            Just upload your design file, Designo takes care of the rest. Connect your design account, and watch the magic happen seamlessly.
          </p>
          <ul className="text-sm text-gray-500 space-y-2 mb-4 max-w-md">
            {[
              "Upload your file quickly and securely",
              "Convert to frontend code efficiently",
              "Maintain precision and consistency",
            ].map((item, index) => (
              <div key={index} className='flex items-center justify-start'>
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 mr-3">
                  <IoCheckmark size={18} className='text-green-500' />
                </div>
                <li>{item}</li>
              </div>
            ))}
          </ul>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg font-semibold shadow transition">Try it now</button>
        </div>
      </FadeInSection>

      <FadeInSection direction="right">
  <div className="relative">
    
    <FadeInSection direction="up">
      <div className='hidden absolute top-0 left-[20%] w-full h-full lg:block items-center justify-center -z-10'>
        <div className='w-[400px] h-[450px] bg-stone-100 rounded-3xl shadow-lg rotate-6'></div>
      </div>
    </FadeInSection>
        <div className="relative bg-yellow-50 shadow-lg rounded-xl p-6 max-w-md lg:w-[400px] lg:h-[460px] mx-auto z-10">
          <div className="flex items-center justify-between space-x-2 text-xs font-bold tracking-wide mb-4">
            <span className='text-[20px]'>Upload Figma File</span>
            <BsInfoCircle size={20} className='text-gray-400 cursor-pointer' />
          </div>
          <div className="bg-gray-200 w-[100%] h-[150px] rounded-3xl mb-5 flex flex-col items-center justify-center ">
            <IoCloudUploadOutline size={40} className="text-gray-400" />
            <div className="text-gray-500 text-xs mt-2">
              <span className='text-orange-500 cursor-pointer'>Click to upload</span> or Drag and drop
            </div>
            <div className="text-gray-500 text-xs">the file must be in .fig format</div>
          </div>
          <ul className="text-xs text-gray-700 space-y-2">
            {[
              "Immediately upload your design to Designo",
              "Our AI reviews and optimizes your design",
              "See your polished frontend code instantly",
              "Download and deploy your frontend app",
            ].map((item, index) => (
              <div key={index} className='flex items-center justify-start'>
                <div className='flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 mr-3'>
                  <IoCheckmark size={18} className='text-green-500' />
                </div>
                <li>{item}</li>
              </div>
            ))}
          </ul>
          <div className="flex justify-center gap-3 mt-6">
            <button className="flex-1 border border-orange-500 text-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-orange-100 transition">Edit Code</button>
            <button className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition">Get Code</button>
          </div>
        </div>
      </div>
    </FadeInSection>
    </section>
  )
}

export default Upload;
