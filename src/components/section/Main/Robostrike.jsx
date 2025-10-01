import React from "react";
import { Calendar, Users, IndianRupee, Phone } from "lucide-react";

const Robostrike = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-md text-white shadow-2xl rounded-2xl border border-purple-500/60 p-6 space-y-6">

        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-2xl font-extrabold tracking-wide text-purple-300 drop-shadow-md">
            🤖⚡ ROBOSTRIKE 2025 🤖
          </h1>
          <p className="text-sm sm:text-lg italic text-gray-200">
            Design. Build. Dominate.
          </p>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-100">
          🤖⚡ Robostrike is a thrilling robotics event where participants design, build, and control their own robots to battle it out in a soccer-style showdown ⚽.  
          The challenge tests creativity in robot design 🛠, precision in control mechanisms 🎮, smart strategies 🧠, and strong teamwork 🤝—all while bringing the electrifying spirit of football 🏆🔥 onto the robotics arena 🚀.
        </p>

        {/* Format */}
        <div className="space-y-2">
          <h2 className="font-semibold text-purple-300 text-sm sm:text-base">
            📜 Format:
          </h2>
          <ul className="list-disc list-inside text-gray-100 text-sm sm:text-base space-y-1">
            <li>League/knockout matches</li>
          </ul>
          <p className="text-red-400 text-sm sm:text-base">
            Team Players: 5 to 6 Participants (₹50 extra for additional members)
          </p>
        </div>

        {/* Details */}
        <div className="space-y-2 text-sm sm:text-base text-gray-100">
          <p className="flex items-center gap-2">
            <Calendar size={16} /> <b>Date:</b> 11th & 12th October 2025
          </p>
          <p className="flex items-center gap-2">
            <Users size={16} /> <b>Open to:</b> All Participants
          </p>
          <p className="flex items-center gap-2">
            <IndianRupee size={16} /> <b>Entry Fee:</b> Rs 400 (5 members) + ₹50 per extra member
          </p>
          <p className="flex items-center gap-2">
            <Phone size={16} /> <b>Contact:</b> Shamsreja Shaikh – +91 7276700170
          </p>
        </div>

        {/* Footer */}
        <div className="text-center space-y-3">
          <p className="text-sm sm:text-base text-gray-200">
            🎯 We look forward to your participation and wish you the best of luck!
          </p>
          <p className="text-purple-300 font-semibold drop-shadow-md text-sm sm:text-base">
            🚀 Register now and let the robotic battles begin!
          </p>
        </div>

        {/* Register Buttons */}
        <div className="flex justify-center gap-3 flex-wrap">
         <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSc5y7p-JPYSXYjLHqhH42aA9xdmsVCBuDPD-wsNigX1GvM9Fw/viewform"
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

export default Robostrike;
