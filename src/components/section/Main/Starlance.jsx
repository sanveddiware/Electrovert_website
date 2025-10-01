import React from "react";
import { Calendar, Users, IndianRupee, Phone, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Starlance = () => {
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
            🌟 STARLANCE 2025 🌟
          </h1>
          <p className="text-sm sm:text-lg italic text-gray-200">
            Where careers take flight, and futures ignite!
          </p>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-100">
          💼 Think you’ve got what it takes to crack placements? STARLANCE – the Ultimate Mock Placement Challenge – will test your aptitude, reasoning, and interview skills.
          <br />
          🚀 Conquer rounds in Aptitude & Logical Reasoning, Technical & General Knowledge, and HR & Personal Interview.
        </p>

        {/* Format */}
        <div className="space-y-2">
          <h2 className="font-semibold text-purple-300 text-sm sm:text-base">
            📜 Format:
          </h2>
          <ul className="list-disc list-inside text-gray-100 text-sm sm:text-base space-y-1">
            <li>Aptitude & Logical Reasoning</li>
            <li>Technical & General Knowledge</li>
            <li>HR & Personal Interview</li>
          </ul>
          <p className="text-red-400 text-sm sm:text-base">
            Team Size: Solo (1 participant) or Duo (2 participants)
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
            <IndianRupee size={16} /> <b>Entry Fee:</b> ₹100
          </p>
          <p className="flex items-center gap-2">
            <Phone size={16} /> <b>Contact:</b> Srushti – +91 7058112614
          </p>
        </div>

        {/* Footer */}
        <div className="text-center space-y-3">
          <p className="text-sm sm:text-base text-gray-200">
            🎯 Whether you’re sharpening your skills for placements or just up for the challenge, STARLANCE is your launchpad to success.
          </p>
          <p className="text-purple-300 font-semibold drop-shadow-md text-sm sm:text-base">
            🔥 Ready to soar beyond limits? The corporate galaxy awaits your brilliance!
          </p>
        </div>

        {/* Register Buttons */}
        <div className="flex justify-center gap-3 flex-wrap">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdDABpygRLTq2XVAJSjZTXMTblHWRyfPoxnGUHbU0Zng81UbA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 sm:px-6 sm:py-3 bg-purple-600/80 hover:bg-purple-700/90 text-white font-bold rounded-full shadow-lg backdrop-blur-sm text-sm sm:text-base"
          >
            Novice Track Register
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScXR_f3tr24nO14zdL9W6iONbNPjCFBSruYJ0xh7T6noongJw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 sm:px-6 sm:py-3 bg-purple-600/80 hover:bg-purple-700/90 text-white font-bold rounded-full shadow-lg backdrop-blur-sm text-sm sm:text-base"
          >
            Expert Track Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Starlance;
