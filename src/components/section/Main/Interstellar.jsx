import React from "react";
import { Calendar, Users, IndianRupee, Phone, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Interstellar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen pb-7">
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
          <h1 className="text-3xl font-extrabold tracking-wide text-purple-300 drop-shadow-md">
            🌠 INTERSTELLAR 2025 🌠
          </h1>
          <p className="text-lg italic text-gray-200">
            A galaxy of questions. A universe of possibilities.
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-100">
          💡 Are you a first-year student with a mind that’s out of this world?
          Then it's time to test your limits in <b>INTERSTELLAR</b> – the ultimate
          solo quiz challenge crafted exclusively for FEs!
        </p>

        {/* Categories */}
        <div className="space-y-2">
          <h2 className="font-semibold text-purple-300">
            🛰 Categories you'll navigate:
          </h2>
          <ul className="list-disc list-inside text-gray-100 space-y-1">
            <li>🔍 Logical Reasoning</li>
            <li>📖 General Knowledge</li>
            <li>🧠 And more cosmic brain-busters!</li>
          </ul>
          <p className="text-red-400">
            🚫 No squads. No lifelines. Just you, your knowledge, and the stars.
          </p>
        </div>

        {/* Details */}
        <div className="space-y-2 text-sm text-gray-100">
          <p className="flex items-center gap-2">
            <Calendar size={16} /> <b>Date:</b> 11th October 2025
          </p>
          <p className="flex items-center gap-2">
            <Users size={16} /> <b>Open to:</b> First Year (B.Tech) & Diploma Students
          </p>
          <p className="flex items-center gap-2">
            <Users size={16} /> <b>Team Size:</b> Solo (1 participant)
          </p>
          <p className="flex items-center gap-2">
            <IndianRupee size={16} /> <b>Entry Fee:</b> Rs 80
          </p>
          <p className="flex items-center gap-2">
            <Phone size={16} /> <b>Contact:</b> Yashashri – +91 8856956033
          </p>
        </div>

        {/* Footer */}
        <div className="text-center space-y-3">
          <p className="text-gray-200">
            🎯 Whether you’re aiming for glory or just love a good mental workout,
            <br /> INTERSTELLAR is your launchpad.
          </p>
          <p className="text-purple-300 font-semibold drop-shadow-md">
            🔥 Ready to go intergalactic? The universe awaits your brilliance!
          </p>
        </div>

        {/* Register Button */}
        <div className="flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfL05sETNBzbZ35eVV_cCKwt5x-wtxQGcLX8JHnQNQRx7i39w/viewform"
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

export default Interstellar;
