import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Layout from "./components/layout/Layout.jsx";
import Home from "./components/section/Main/Home.jsx";
import Astrosymposium from "./components/section/Main/Astrosymposium.jsx";
import Robostrike from "./components/section/Main/Robostrike.jsx";
import Auctionverse from "./components/section/Main/Auctionverse.jsx";
import Circuitsupernova from "./components/section/Main/Circuitsupernova.jsx";
// import more event components...

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events/astrosymposium" element={<Astrosymposium />} />
          <Route path="events/robostrike" element={<Robostrike />} />
          <Route path="events/auctionverse" element={<Auctionverse />} />
          <Route path="events/circuitsupernova" element={<Circuitsupernova />} />
          <Route path="events/codenebula" element={<Robostrike />} />
          <Route path="events/enigma" element={<Robostrike />} />
          <Route path="events/gallaxyquest" element={<Robostrike />} />
          <Route path="events/interstellar" element={<Robostrike />} />
          <Route path="events/starlance" element={<Robostrike />} />



          {/* add other events here */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
