import React from "react";
import underLineSvg from "../assets/Vector 5.svg";


import arrow from "../assets/Arrow.svg"
import {Link} from "react-router-dom"
const FilmsPage = ({title,quote,author,imagePath,desc,listItems,next,pict1,pict2,pict3,pict4}) => {
  return (
    <div className="relative min-h-screen font-serif px-2 sm:px-8 py-20 text-black">
      {/* Quote Section */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-block text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-normal" style={{fontFamily: "Halant"}}>
            {quote} – {author}
          </h1>
          <img
            src={underLineSvg}
            alt="underline"
            className="w-full h-auto  mx-auto "
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center m-auto w-full max-w-6xl">
        {/* Back Button */}
        <div className="w-full flex justify-start">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-red-400 border border-red-400 rounded-full px-4 py-1.5 hover:bg-red-50 transition text-sm sm:text-base"
            aria-label="Go back"
          >
            &lt; Back
          </button>
        </div>
        {/* Main Content */}
        <main className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 lg:gap-16 max-w-6xl mx-auto px-2 sm:px-4">
          {/* Left: Image */}
          <div className="w-full sm:w-3/4 md:w-1/2 lg:w-[24vw]">
            <img
              src= {imagePath}
              alt="Film Production"
              className=""
            />  
          </div>

          {/* Right: Text */}
          <article className="max-w-xl text-base sm:text-lg leading-relaxed text-black mt-8 pt-8 md:mt-0 lg:w-[30vw] "  style={{fontFamily: "Instrument Sans"}}>
            <p className="mb-4">
              {desc}
            </p>
            <p className="font-semibold mb-2">V crafts:</p>
            <ul className="list-disc list-inside space-y-1 mb-6">
              {listItems.map((item,i)=>(
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="flex flex-col items-left cursor-pointer font-normal hover:text-red-600 transition mt-15" style={{fontFamily: "Instrument Sans"}}>
              <Link to={next}>
              <span >Explore Now</span>
              <span className="text-2xl sm:text-3xl leading-none">
                <img src={arrow} alt="" className="w-30"/>
              </span>
              </Link>
            </div>
          </article>
        </main>

      </div>
      {/* Decorative Cameras */}
      <img
        src={pict1}
        alt="Vintage camera"
        className="absolute top-52 right-50 h-[12vh] opacity-100"
      />
      <img
        src={pict2}
        alt="Camera on tripod"
        className="absolute bottom-75 right-70 h-[9vh] opacity-100"
      />
      <img
        src={pict3}
        alt="Tripod"
        className="absolute bottom-22 right-60 h-[12vh] opacity-100"
      />
      <img
        src={pict4}
        alt="Film camera"
        className="absolute bottom-25 left-55 h-[9vh] opacity-100"
      />
    </div>
  );
};

export default FilmsPage;