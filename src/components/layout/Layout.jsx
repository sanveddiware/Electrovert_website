import React from 'react';
import Navbar from '../section/Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../section/Footer/Footer';
import Galaxy from '../UI/Galaxy';
import Home from '../section/Main/Home';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen text-white relative">
      {/* Galaxy background */}
      <div className="fixed inset-0 -z-10 bg-black">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
      </div>

      {/* Foreground content */}
      <Navbar />
      <main className="flex-1 relative z-10">
      <Outlet/>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
