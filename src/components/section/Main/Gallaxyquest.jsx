import React from "react";
import { Calendar, Users, IndianRupee, Phone, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GalaxyQuest = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-md text-white shadow-2xl rounded-2xl border border-purple-500/60 p-6 space-y-6 relative">

        {/* 🔙 Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 flex items-center gap-2 text-purple-300 hover:text-purple-400 transition"
        >
          <ArrowLeft size={20} /> Back
        </button>

        {/* Title */}
        <div className="text-center space-y-2 mt-6">
          <h1 className="text-2xl sm:text-2xl font-extrabold tracking-wide text-purple-300 drop-shadow-md">
            🌌✨ GALAXY QUEST 2025 ✨🌌
          </h1>
          <p className="text-sm sm:text-lg italic text-gray-200">
            Think. Explore. Outshine.
          </p>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-100">
          🚀 Welcome to GALAXY QUEST 2025 — the ultimate solo mission where your brain takes the lead through stars, stats, and smarts!
          <br />
          🧠 Dive into a universe of Aptitude, Current Affairs, General Knowledge, and more. No lifelines. No teammates. Just you vs the cosmos. 💥
        </p>

        {/* Format */}
        <div className="space-y-2">
          <h2 className="font-semibold text-purple-300 text-sm sm:text-base">
            📜 Format:
          </h2>
          <p className="list-inside text-gray-100 text-sm sm:text-base">
            Solo quiz rounds on Aptitude, Current Affairs & General Knowledge.
          </p>
          <p className="text-red-400 text-sm sm:text-base">
            Team Size: Solo (1 participant)
          </p>
        </div>

        {/* Details */}
        <div className="space-y-2 text-sm sm:text-base text-gray-100">
          <p className="flex items-center gap-2">
            <Calendar size={16} /> <b>Date:</b> 12th October 2025
          </p>
          <p className="flex items-center gap-2">
            <Users size={16} /> <b>Open to:</b> All Participants
          </p>
          <p className="flex items-center gap-2">
            <IndianRupee size={16} /> <b>Entry Fee:</b> Rs 100
          </p>
          <p className="flex items-center gap-2">
            <Phone size={16} /> <b>Contact:</b> Anant – +91 93567 91178
          </p>
        </div>

        {/* Footer */}
        <div className="text-center space-y-3">
          <p className="text-sm sm:text-base text-gray-200">
            🧩 Think. 🌌 Explore. 🏆 Outshine.
          </p>
          <p className="text-purple-300 font-semibold drop-shadow-md text-sm sm:text-base">
            🌠 Rise among the stars at GALAXY QUEST 2025!
          </p>
        </div>

        {/* Register Button */}
        <div className="flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdYvdlT3e84rAdTQ9B92OwYd1qZK4mEmA_hbFMPgbIuDHCYXA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 sm:px-6 sm:py-3 bg-purple-600/80 hover:bg-purple-700/90 text-white font-bold rounded-full shadow-lg backdrop-blur-sm text-sm sm:text-base"
          >
            Register Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default GalaxyQuest;
