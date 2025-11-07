import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='px-5 relative'>
      {/* Hamburger Button */}
      <button 
        onClick={toggleMenu} 
        className="fixed right-5 top-4 z-50 flex flex-col justify-center items-center w-10 h-10 space-y-2 p-2 hover:bg-gray-100 rounded-full"
      >
        <span className={`w-7 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
        <span className={`w-7 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-7 h-0.5 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
      </button>

      {/* Navigation Items */}
      <ul className={`flex justify-end pr-16 space-x-5 py-4 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        <li><Link to="/" className="hover:text-gray-600">Hero</Link></li>

        <li><Link to="/services" className="hover:text-gray-600">Services</Link></li>
        <li><Link to="/their-stories" className="hover:text-gray-600">Their Stories</Link></li>
        <li><Link to="/ourstory" className="hover:text-gray-600">Our Story</Link></li>
        <li><Link to="/varman" className="hover:text-gray-600">Varman</Link></li>
        <li><Link to="/lets-talk" className="hover:text-gray-600">Let's Talk</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
