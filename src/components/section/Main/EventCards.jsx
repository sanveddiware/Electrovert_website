import React from "react";
import { Link } from "react-router-dom";
import events from "./Eventsdata";

const EventCard = ({ id, title, quote, color, registerLink }) => {
  return (
    <div
      className="p-6 rounded-2xl bg-black/40 backdrop-blur-sm 
                 border border-gray-700 hover:scale-105 
                 transition-all flex flex-col items-center text-center"
    >
      {/* Event Title */}
      <h3
        className={`text-2xl font-bold bg-gradient-to-r ${color} 
                    bg-clip-text text-transparent`}
      >
        {title}
      </h3>

      {/* Event Quote */}
      <p className="mt-3 text-gray-400">{quote}</p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        {/* Read More */}
        <Link
          to={`/events/${id}`}
          className="px-6 py-2 rounded-xl bg-gradient-to-r 
                     from-blue-500 to-cyan-400 text-black font-semibold 
                     shadow-lg hover:opacity-90 transition"
        >
          Read More
        </Link>

        {/* Register */}
        <a
          href={registerLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-xl bg-gradient-to-r 
                     from-green-500 to-emerald-400 text-black font-semibold 
                     shadow-lg hover:opacity-90 transition"
        >
          Register
        </a>
      </div>
    </div>
  );
};

const EventCards = () => {
  return (
    <section id="events" className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      {events.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          title={event.title}
          quote={event.quote}
          color={event.color}
          registerLink={event.registerLink}
        />
      ))}
    </section>
  );
};

export default EventCards;
