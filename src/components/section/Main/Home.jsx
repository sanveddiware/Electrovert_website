import React from "react";
import walchandlogo from "../../../assets/walchandlogo.svg";
import EventCards from "./EventCards";
import { Link } from "react-scroll";
import EventRegistrationForm from "./Register";
import LogoLoop from "../../UI/logoloop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import sponsor1 from '../../../assets/Sponsors/sponsor1.jpg';
import sponsor2 from '../../../assets/Sponsors/sponsor2.png';
import sponsor3 from '../../../assets/Sponsors/sponsor3.jpg';
import sponsor4 from '../../../assets/Sponsors/sponsor4.jpg';
import sponsor5 from '../../../assets/Sponsors/sponsor5.jpg'

const techLogos = [
  { src: sponsor1, title: "React" },
  { src: sponsor2, title: "Next.js" },
  { src: sponsor3, title: "TypeScript" },
  { src: sponsor4, title: "Tailwind CSS" },
  { src: sponsor5, title: "Tailwind CSS" },
];


const MainContent = () => {
  return (
    <>
    <main className="flex-1 w-full px-4 sm:px-6 py-10 sm:py-16 text-center">
      {/* Hero Section */}
      <section className=" mx-auto space-y-6">
        {/* College Name */}
        <h1
          className="flex flex-col md:flex-row items-center justify-center 
                     text-2xl sm:text-3xl md:text-5xl font-extrabold 
                     bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200
                     bg-clip-text text-transparent drop-shadow-lg gap-3 md:gap-2"
        >
          <img
  src={walchandlogo}
  alt="Walchand Logo"
  className="h-18 sm:h-14 md:h-20 w-auto drop-shadow-lg"
/>

          <span className="leading-snug text-center md:text-left">
            Walchand College of Engineering
          </span>
        </h1>

        {/* Association */}
        <h2
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold 
                     bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 
                     bg-clip-text text-transparent drop-shadow-lg"
        >
          Electronics Engineering Student&apos;s Association (ELESA)
        </h2>

        {/* Presents */}
        <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto font-bold">
          Presents
        </p>

        {/* Event Title */}
        <h3
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold 
                     text-white drop-shadow-lg"
        >
          Electrovert 2025-26
        </h3>
        {/* When Event is happening */}
         <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto font-bold">
          11 & 12 October
        </p>
<section className="mt-10">
  <h2 className="text-2xl font-bold text-white mb-6">Our Sponsors</h2>
</section>        

<div style={{
    width: '100%',          // ✅ makes it full width
    height: '100px',
    position: 'relative',
    overflow: 'hidden',
  }}>
      <LogoLoop
        logos={techLogos}
        speed={120}
        width='100%'
        direction="left"
        logoHeight={100}
        gap={50}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Technology partners"
      />
    </div>


        {/* Explore Button */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <Link
            to="events"
            smooth={true}
            duration={600}
            offset={-50} // adjust if you have sticky navbar
            className="cursor-pointer px-4 sm:px-6 py-2 sm:py-3 rounded-xl 
                       bg-green-600/40 backdrop-blur-sm border border-green-400 
                       text-sm sm:text-base md:text-lg text-white font-semibold 
                       hover:bg-green-500/50 hover:scale-105 transition-all"
          >
            Explore Events
          </Link>
        </div>
      </section>

      {/* Events Section */}
      <div id="events" className="mt-12 sm:mt-16">
        <EventCards/>
      </div>
      
    </main>
    <EventRegistrationForm/>
    </>
  );
};

export default MainContent;
