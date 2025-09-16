import React from "react";
import { Mail, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black/30 backdrop-blur-md text-white py-16 px-6 flex flex-col space-y-12">
      {/* Top content: Left + Right */}
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0">
        
        {/* Left: About */}
        <div className="md:w-1/3 text-left space-y-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            ELESA
          </h2>
          <p className="text-gray-200">
            Exploring the universe of innovation and technology.
          </p>
        </div>

        {/* Right: Contact + Social Media */}
        <div className="md:w-1/3 text-right space-y-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <div className="flex flex-col items-end space-y-2 text-gray-200">
            <div className="flex items-center space-x-2">
              <Mail size={20} className="text-blue-400" />
              <span>walchand.elesa@gmail.com</span>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex justify-end space-x-4 mt-4">
            <a href="#" className="transition-all duration-300 hover:scale-110" style={{ color: "#f009ba" }}>
              <Instagram size={24} />
            </a>
            <a href="#" className="transition-all duration-300 hover:scale-110" style={{ color: "#0447cc" }}>
              <Linkedin size={24} />
            </a>
            <a href="#" className="transition-all duration-300 hover:scale-110" style={{ color: "#0447cc" }}>
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-700/50"></div>

      {/* Bottom: Copyright */}
      <div className="w-full text-center">
        <p className="text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} ELESA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
