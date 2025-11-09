import React from 'react'
import Group9 from "../assets/Group 9.png"
import Group2 from "../assets/Group 2.svg"
import img20 from "../assets/136881584_562ce9a4-ee1d-4be1-8b12-5b603ee14c6b 1 (1).svg"
import Vector from"../assets/Vector.svg"
import Frame2 from"../assets/Frame 2.png"
import Vector1 from"../assets/Vector (1).svg"
const TheirStories = () => {
  return (
    <>
      <div className=' flex'>
           
        <div className=' flex-col'>
            <img className=' w-[500px] h-[400px]  -mt-11 ml-20' src={Group9} alt="" srcset="" />
        <div className=' flex '>
        <img className=' w-[250 px] h-[250px] ml-10' src={img20} alt="" srcset="" />
        <p className='  ml-14  mt-28' style={{
     fontFamily: "Island Moments,regular",
fontWeight: '400',
fontSize: '35px',

lineHeight: '100%',
letterSpacing:' 0%',
textAlign: 'center'

        }}>Branding Experts</p>
        <div>
        <img className=' h-[163px] w-[198px] -mt-10' src={Vector} alt="" />
      </div>
      </div>
   </div>
        <div>
          <p style={{
            fontFamily: "Island Moments,regular",
            fontWeight: '400',
            fontSize: '35px',

            lineHeight: '100%',
            letterSpacing: ' 0%',
            
          }} className=' mt-10 '>Film Makers</p>
          <div>
            <img className=' mt-1 w-[100px] h-[80px]  ml-20' src={Vector1} alt="" srcset="" />
          </div>
          <div>
            <img className=' w-[500px] h-[300px]' src={Group2} alt="" srcset="" />
          </div>
          <div>
            <p style={{
              fontFamily: "Halant,regular",
              fontWeight: '400',
              fontSize: '30px',

              lineHeight: '100%',
              letterSpacing: ' 0%',
              textAlign: 'center'
            }} className=' mt-12 w-[586px] h-[60px] -ml-12 '>Take a closer look at the stories V bring to life.</p>
          </div>
          <div>
            <img className=' ml-40' src={Frame2} alt="" />
          </div>
        </div>
   </div>
      
    </>
 
  )
}

export default TheirStories
