import React, { useState } from 'react'
import reelbg from '../assets/Subtract.png'
import leftbtn from '../assets/leftRectangleBtn.png'
import rightbtn from '../assets/rightRectangleBtn.png'
import camera from '../assets/CamGroup.svg'
import rightBottomFooter from "../assets/rightBottomFooter.png"

const Varman = () => {
  const videos = [
    "https://www.youtube.com/embed/iHeEOdInQ1U",
    "https://www.youtube.com/embed/oc_o5DZM3qc",
    "https://www.youtube.com/embed/rswoEGnNx2Y",
  ];
  const [currentIndex,setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='min-h-screen relative flex flex-col items-center justify-center px-6 py-10 select-none'>

      {/* Left Camera */}
      <div className='hidden lg:block absolute left-10 top-1/4 opacity-70 w-48'>
        <img src={camera} alt="Camera" className='h-100'/>
        </div>
      <main className='relative w-full max-w-6xl flex flex-col items-center justify-center'>


        {/* Heading */}
        <div className='text-center mb-15'>
          <h1 className='font-normal text-[40px] leading-[100%] tracking-[0] text-center' style={{fontFamily:"Halant"}}>The Highlight Reel</h1>
          <p className='text-gray-700 text-xl mt-4' style={{fontFamily:"Instrument Sans"}}>Watch the magic we&apos;ve captured.</p>
        </div>

        {/* Video Container */}
        <div className='relative w-full flex justify-center items-center'>
          {/* Background Film */}
          <img
            src={reelbg}
            alt="FilmStrip Background"
            className='w-full max-w-3xl mx-auto'
          />

          {/* Video in Center */}
          <div className='absolute inset-0 flex justify-center items-center'>
            {/* Left Button */}
            <button className='absolute left-5 lg:left-[200px] ' onClick={handlePrev}>
              <img src={leftbtn} alt="Previous" className="h-20 md:h-80 object-contain" />
            </button>
            <div className= 'w-[70%] max-w-xl aspect-video rounded-md overflow-hidden shadow-lg'>
              <iframe
                key={currentIndex}
                src={videos[currentIndex]}
                title={`Highlight Reel Video ${currentIndex+1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            {/* Right Button */}
            <button className='absolute right-5 lg:right-[200px]  ' onClick={handleNext}>
              <img src={rightbtn} alt="Next" className="h-20 md:h-80 object-contain" />
            </button>
          </div>
        </div>
      </main>

      {/* Decorative Footer */}
      <div className="hidden md:block absolute bottom-0 right-0 opacity-100 w-48 pointer-events-none">
        <img src={rightBottomFooter} alt="Decorative Footer" />
      </div>
    </div>
  )
}

export default Varman