import React from "react";
import { Calendar, Users, IndianRupee, Phone } from "lucide-react";

const Enigma = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-md text-white shadow-2xl rounded-2xl border border-purple-500/60 p-6 space-y-6">

        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-2xl font-extrabold tracking-wide text-purple-300 drop-shadow-md">
            🌌✨ ENIGMA 2025 ✨🌌
          </h1>
          <p className="text-sm sm:text-lg italic text-gray-200">
            Solve. Explore. Laugh.
          </p>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-100">
          🚀 Welcome to ENIGMA 2025 — the ultimate mystery event where space meets puzzles, riddles, and brain-twisting fun!
          <br />
          🧩🔭 Think you can crack the code, solve the riddles, and uncover the secrets of the cosmos?
          This is not just another quiz—it’s a galactic ride of mystery & madness! 🌌🚀
        </p>

        {/* Format */}
        <div className="space-y-2">
          <h2 className="font-semibold text-purple-300 text-sm sm:text-base">
            📜 Format:
          </h2>
          <p className="list-inside text-gray-100 text-sm sm:text-base">
            Puzzles, riddles & mystery-solving rounds.
          </p>
          <p className="text-red-400 text-sm sm:text-base">
            Team Size: 2 (bring your partner-in-crime)
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
            <Phone size={16} /> <b>Contact:</b> Aditya – +91 7385613531
          </p>
        </div>

        {/* Footer */}
        <div className="text-center space-y-3">
          <p className="text-sm sm:text-base text-gray-200">
            🧠 Solve. 🌠 Explore. 🎉 Laugh.
          </p>
          <p className="text-purple-300 font-semibold drop-shadow-md text-sm sm:text-base">
            🌌 Crack the cosmic code at ENIGMA 2025!
          </p>
        </div>

        {/* Register Button */}
        <div className="flex justify-center">
          <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSdF7dPU7AuMFlmF5FEkdBKDVPUzcPNs3UaY-Im9R1tPMX9eEg/viewform"
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

export default Enigma;
