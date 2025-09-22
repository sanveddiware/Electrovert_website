import React from "react";
import walchandlogo from "../../../assets/walchandlogo.svg";
import EventCards from "./EventCards";
import { Link } from "react-scroll";

const MainContent = () => {
  return (
    <main className="flex-1 w-full px-4 sm:px-6 py-10 sm:py-16 text-center">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto space-y-6">
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
        <EventCards />
      </div>
    </main>
  );
};

export default MainContent;
