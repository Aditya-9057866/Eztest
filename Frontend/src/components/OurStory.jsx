import React from 'react'
import frame9 from '../assets/Frame 9.png'
import frame22 from '../assets/Frame 22.png'
import frame23 from '../assets/Frame 23.png'
import Group10 from '../assets/Group 10 (1).png'
import objects from '../assets/OBJECTS.png'
const OurStory = () => {
  return (
    <>
      <div className=' flex'>
   <div className=' flex-col items-center'>
         <div className=' w-[660px] mt-24  ml-12  mr-16'>
        <p style={{
     fontFamily: "Halant,regular",
fontWeight: '400',
fontSize: '35px',

lineHeight: '100%',
letterSpacing:' 0%',
textAlign: 'center'

   }} >A montage of familiar faces and names.</p>
      
    </div>
    <div className=' w-[530px] h-[145px] ml-26  '>
  <p className="font-[Instrument_Sans] font-normal text-[22px] leading-[100%] tracking-[0%] text-center  mt-14 ">
    Some stories come from the biggest names. Others begin with bold, rising voices.
    We’ve been fortunate to walk alongside both — listening, creating, and building stories that matter.
  </p>
      </div>
      
     <div className="flex justify-center items-center mt-8 relative  ">
  {/* Image 1 (left) */}
  <img
    src={frame9}
    alt="Image 1"
    className="w-[250px] h-[250px] object-cover rounded-xl rotate-[-5deg]  z-10"
  />

  {/* Image 2 (middle, overlaps both sides) */}
  <img
    src={frame22}
    alt="Image 2"
    className="w-[250px] h-[250px] object-cover rounded-xl rotate-[0deg] -ml-[80px]  z-20"
  />

  {/* Image 3 (right, overlaps middle) */}
  <img
    src={frame23}
    alt="Image 3"
    className="w-[250px] h-[250px] object-cover rounded-xl rotate-[5deg] -ml-[80px]  z-10"
  />
</div>
     </div>
<div className=' flex-col items-center'>
  <p className='w-[595px] h-[368px] mt-12 ml-5' style={{
     fontFamily: "Island Moments,regular",
fontWeight: '400',
fontSize: '53px',

lineHeight: '100%',
letterSpacing:' 0%',
textAlign: 'center',
  }}>
    Every project is more than just a brief – it’s a new chapter waiting to be written.
    Together, we've crafted tales that inspire, connect, and endure.
          </p>
          <div className="relative flex justify-center items-center  -mt-26">

  <img src={Group10} alt="Background" className="w-full h-auto" />


  <img 
    src={objects} 
    alt="Overlay" 
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[230px]  mt-14"
  />
</div>

</div>

        
    </div>

    </>
    
  )
}

export default OurStory