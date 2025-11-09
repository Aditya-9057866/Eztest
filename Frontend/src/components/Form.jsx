import React, { useState } from 'react'


const Form = () => {
  
  const [formData,setFormData] = useState({
  name:'',
  email:'',
  phone:'',
  message:''
  })
  
  const [statusMessage,setStatusMessage] = useState('');
  const [loading,setLoading] = useState(false);
  
  
  
  
   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
  const handleChange = (e) =>{
    const {name,value} = e.target;
    setFormData({...formData,[name]:value})
  }
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const {name,email,phone,message}=formData;
    if(!name||!email||!message){
      setStatusMessage('Please fill all the required fields.')
      return;
    }
    if(!validateEmail(email)){
      setStatusMessage('Please enter a valid email address.')
      return;
    }
    setLoading(true);
    setStatusMessage("");
  
    try{
      const res = await fetch('https://vernanbackend.ezlab.in/api/contact-us/',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });
      if(res.ok){
        await res.json();
        console.log(res);
        setStatusMessage('Form Submitted')
        setFormData({name:'',email:'',message:'',phone:''});
      }
      else{
        setStatusMessage('Something went wrong')
      }
    }
    catch{
      setStatusMessage('Network Error')
    }
    finally{
      setLoading(false)
    }
  
  }

  return (
    <div className="z-10 md:w-1/2 w-full p-6 sm:p-8 ">
        <h2 className="text-2xl sm:text-3xl font-normal text-center mt-5" style={{fontFamily: "Halant"}}>Join the Story</h2>
        <p className="sm:text-lg font-normal text-gray-700 text-center pt-0" style={{fontFamily: "Instrument Sans"}}>
          Ready to bring your vision to life? Let’s talk.
        </p>
      
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-gray-800 mt-15" style={{fontFamily:"Instrument Sans"}}>
          <input 
            type="text" 
            placeholder="Your name*"
            value={formData.name}
            name="name"
            onChange={handleChange} 
            required 
            className="px-4 py-3 border border-gray-400 bg-white  opacity-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input 
            type="email" 
            placeholder="Your email*" 
            value={formData.email}
            name="email"
            onChange={handleChange}
            required 
            className="px-4 py-3 border border-gray-400 bg-white  opacity-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input 
            type="tel" 
            placeholder="Phone" 
            name='phone'
            className="px-4 py-3 border border-gray-400 bg-white  opacity-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea 
            placeholder="Your message*" 
            required 
            name='message'
            className="px-4 py-3 border border-gray-400 bg-white  opacity-100 rounded-md shadow-sm resize-y min-h-[120px] focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={formData.message}
            onChange={handleChange}
          />
          <button 
            type="submit" 
            className="self-center bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6 py-2 font-semibold transition"
            style={{fontFamily: 'Instrument Sans'}}
          >
            {loading? 'Submitting...' : 'Submit'}
          </button>
          {statusMessage && (
          <p className="text-center mt-4 text-orange-600 font-medium">
            {statusMessage}
          </p>
          )}
        </form>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2 sm:gap-4 font-bold text-orange-600 text-sm pt-10" style={{fontFamily: "Halant"}}>
          <a 
            href="mailto:vernita@varnanfilms.co.in" 
            className="underline hover:text-orange-800 break-all"
          >
            vernita@varnanfilms.co.in
          </a>
          <span className="hidden sm:inline">|</span>
          <span>+91 98736 84567</span>
        </div>
      </div>
  )
}

export default Form