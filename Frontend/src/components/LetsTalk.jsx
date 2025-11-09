import React from 'react';
import Form from './Form';
import  footerr from '../assets/FooterVector.png'
import  footerl from '../assets/FooterVector1.png'
const LetsTalk = () => {
  return (
    <div className="min-h-screen px-6 sm:px-10 md:px-16 lg:px-20 py-16 flex flex-col md:flex-row items-center justify-between font-serif text-gray-800">
      <div className="absolute bottom-0 left-0 w-1/3 max-w-[400px] opacity-70 z-0">
        <img
          src={footerl}
          alt="Left background vector"
          className="w-full h-auto"
        />
      </div>

      <div className="absolute top-0 right-0 w-1/3 max-w-[400px] opacity-70 z-0">
        <img
          src={footerr}
          alt="Right background vector"
          className="w-full h-auto"
        />
      </div>
      
      {/* Left Text Section */}
      <div className="md:w-1/2 flex justify-center md:justify-start items-center z-10">
        <p className="text-base sm:text-lg leading-relaxed text-center md:text-left max-w-md" style={{fontFamily:"Instrument Sans"}}>
          Whether you have an idea, a question, or simply want to explore how V can work together,<br /> 
          V’re just a message away.<br />
          Let’s catch up over coffee.<br />
          Great stories always begin with a good conversation.
        </p>
      </div>

      {/* Right Form Section */}
      <Form />
    </div>
  );
};

export default LetsTalk;