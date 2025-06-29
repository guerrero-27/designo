import React, { useEffect, useState } from 'react';
import FadeInSection from './FadeInSection';
const Assurance = () => {
  const fullCode = `
public function convertDesign() {
  $this->load->model('design_model');
  $data['designs'] = $this->design_model->fetch();
  if(count($data['designs']) <= 0){
    $this->load->view('design/no_design_found');
  }
}`;

  const [displayedCode, setDisplayedCode] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullCode.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode((prev) => prev + fullCode[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const reset = setTimeout(() => {
        setDisplayedCode('');
        setIndex(0);
      }, 1500);
      return () => clearTimeout(reset);
    }
  }, [index]);

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 relative overflow-x-hidden">
        <FadeInSection direction="up">
          <h2 className="text-2xl sm:text-3xl font-extrabold max-w-3xl mx-auto text-center mb-6">
            No hassle, you can complete your conversion{' '}
            <span className="gradient-text text-green-500">quickly & easily</span>
          </h2>
          <div className="text-center mb-6 text-sm text-orange-500 cursor-pointer font-semibold hover:underline max-w-xs mx-auto">
            Discover More &rarr;
          </div>
        </FadeInSection>
        

        
        <div className="hidden lg:block absolute top-[30%] left-20 w-[360px] h-[360px] bg-stone-100 z-0 rounded-3xl shadow-lg"></div>

        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10">
          
          <div className="w-full max-w-md bg-yellow-50 shadow rounded-xl p-6 sm:p-8 font-mono text-xs text-gray-900 h-[300px] flex justify-center items-center leading-tight -rotate-2">
            <pre className="text-black p-2 sm:p-4 rounded-md overflow-auto text-[13px] sm:text-[15px] whitespace-pre-wrap">
              <code>
                {displayedCode}
                <span className="animate-pulse text-green-500">|</span>
              </code>
            </pre>
          </div>

         <FadeInSection direction='right'>
              <div className="w-full max-w-md leading-relaxed text-gray-700 text-sm space-y-8">
                <ol className="space-y-8">
                  {[
                    'Upload your design file and Designo will automatically convert it.',
                    'Collaborate with teammates easily through shared workspaces.',
                    'Only .fig format supported to ensure performance and accuracy.',
                    'We safeguard all your designs so you can work securely without worries.'
                  ].map((text, index) => (
                    <li key={index} className="relative group">
                      
                      <div className="absolute left-0 -top-14 sm:-top-10 w-[250px] sm:w-[280px] bg-yellow-100 border border-yellow-300 text-gray-800 p-3 sm:p-4 rounded-xl shadow-lg z-20 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                        {text}
                      </div>

                      
                      <span className="cursor-pointer underline decoration-dotted decoration-orange-400 hover:text-orange-600">
                        {text}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
         </FadeInSection>
          
        </div>
      </section>
    </div>
  );
};

export default Assurance;
