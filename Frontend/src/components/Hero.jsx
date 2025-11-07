import React from 'react'
import whatsapp_Image from '../assets/WhatsApp_Image_2025-11-07_at_04.23.30_920af7a2-removebg-preview.png'

const Hero = () => {
  return (
    <>
      <div className=' flex gap-44'>

        <div className="relative inline-block m-36">
      
        <img 
          src={whatsapp_Image} 
          alt="WhatsApp Overlay" 
          className="w-[400px] h-[400px] relative z-10"
        />
        </div>

        <div className=" items-start w-[477px] h-[400px]   mt-30">
          <p style={{
            fontFamily: "'Island Moments', cursive",
            fontSize: '60px',
            fontWeight: '400',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color:"#0F3255"
          }}
          className="text-center">
            Varnan is where stories find their voice and form
          </p>
          <div>
            <p style={{
              fontFamily: "'Halant', serif",
              fontSize: '30px',
              fontWeight: '400',
              lineHeight: '100%',
              letterSpacing: '0.2em',
              textAlign: 'center',
              color: "#F15D2B"
            }}
            className="text-center mt-8">
              Films  .  Brands  .  Art
            </p>
          </div>
          <div>
            <p style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '18px',
              fontWeight: '400',
              fontStyle: 'normal',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
            }}
            className="text-center mt-10">
              Since 2009, V've been telling stories - stories of people, their journeys, and the places that shape them.
Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.
V doesn't just tell stories - V honors them.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
