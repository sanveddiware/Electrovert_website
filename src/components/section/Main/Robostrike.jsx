import React from "react";

const Robostrike = () => {
  return (
    <div className="max-w-3xl mx-auto text-center py-16">
      <h1 className="text-4xl font-bold mb-4">Robo Soccer</h1>
      <p className="text-lg text-gray-300 mb-6">
        Compete with your bots in the ultimate soccer showdown ⚽🤖
      </p>
      <a
        href="https://forms.gle/robosoccer123"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block px-6 py-2 rounded-xl bg-gradient-to-r 
                   from-green-500 to-teal-400 text-black font-semibold 
                   shadow-lg hover:opacity-90 transition"
      >
        Register Now
      </a>
    </div>
  );
};

export default Robostrike;
