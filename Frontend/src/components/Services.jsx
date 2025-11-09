import React from 'react'
import { Link } from 'react-router-dom'

// import footerSvg from '../assets/Footer.svg'
import underLineSvg from '../assets/Vector 5.svg'
import ArtCuration from '../assets/Frame 31 (2).png'
import Branding from '../assets/Frame 31 (1).png'
import FilmProduction from '../assets/Frame 31.png'

const Services = () => {
  const services = [
    { title: "Film Production", route: "/services/film_production", image: FilmProduction },
    { title: "Branding", route: "/services/branding", image: Branding },
    { title: "Art Curation", route: "/services/art_curation", image: ArtCuration },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main
        className="flex flex-col items-center justify-start pt-20 px-4 md:px-12 lg:px-24"
        style={{ fontFamily: 'Halant' }}
      >
        {/* Heading */}
        <div className="inline-block text-center">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal">
              The storyboard reveals the breadth of our craft.
            </h1>
            <img src={underLineSvg} alt="underline" className="w-full h-auto mx-auto mb-10" />
          </div>
        </div>

        {/* Service images (clickable links) */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 mt-10 w-full max-w-6xl">
          {services.map((service, i) => (
            <Link
              key={i}
              to={service.route}
              className="flex-1 flex justify-center items-center "
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-64 sm:h-80 lg:h-96 w-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="mt-auto">
        <img src={footerSvg} alt="Footer design" className="w-full h-auto block" />
      </footer> */}
    </div>
  )
}

export default Services