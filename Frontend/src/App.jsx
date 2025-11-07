import LetsTalk from "./components/LetsTalk"
import Navbar from "./components/Navbar"
import OurStory from "./components/OurStory"
import Services from "./components/Services"

import Varman from "./components/Varman"
import Hero from "./components/Hero"
import { Routes, Route } from 'react-router-dom'
import TheirStories from "./components/TheirStories"
import "./App.css"

function App() {
  return (
    <div className=" app-overlay min-h-screen bg-white text-black pb-28">
      <Navbar />
      <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/their-stories" element={<TheirStories />} />         
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/varman" element={<Varman />} />
          <Route path="/lets-talk" element={<LetsTalk />} />
        </Routes>
      </div>
  )
}

export default App
