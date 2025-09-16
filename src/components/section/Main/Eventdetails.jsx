import React from "react";
import { useParams } from "react-router-dom";
import events from "./Eventsdata";

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return <h2 className="text-center text-red-500 py-16">Event not found</h2>;
  }

  return (
    <div className="max-w-3xl mx-auto text-center py-16">
      <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
      <p className="text-lg text-gray-300 mb-6">{event.description}</p>
      <p className="italic text-gray-400">{event.quote}</p>
    </div>
  );
};

export default EventDetails;
