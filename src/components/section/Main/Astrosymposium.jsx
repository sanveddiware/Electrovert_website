import React from "react";

const Astrosymposium = () => {
  return (
    <div className="max-w-3xl mx-auto text-center py-16">
      <h1 className="text-4xl font-bold mb-4">Astro Symposium</h1>
      <p className="text-lg text-gray-300 mb-6">
        A deep dive into astronomy and space science 🚀
      </p>
      <a
        href="https://forms.gle/asym123"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block px-6 py-2 rounded-xl bg-gradient-to-r 
                   from-blue-500 to-cyan-400 text-black font-semibold 
                   shadow-lg hover:opacity-90 transition"
      >
        Register Now
      </a>
    </div>
  );
};

export default Astrosymposium;
