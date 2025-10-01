import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Layout from "./components/layout/Layout.jsx";
import Home from "./components/section/Main/Home.jsx";
import Astrosymposium from "./components/section/Main/Astrosymposium.jsx";
import Robostrike from "./components/section/Main/Robostrike.jsx";
import Auctionverse from "./components/section/Main/Auctionverse.jsx";
import CircuitSupernova from "./components/section/Main/Circuitsupernova.jsx";
import Interstellar from "./components/section/Main/Interstellar.jsx";
import CodeNebula from "./components/section/Main/Codenebula.jsx";
import Enigma from "./components/section/Main/Enigma.jsx";
import GalaxyQuest from "./components/section/Main/Gallaxyquest.jsx";
import Starlance from "./components/section/Main/Starlance.jsx";
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
          <Route path="events/circuitsupernova" element={<CircuitSupernova />} />
          <Route path="events/codenebula" element={<CodeNebula />} />
          <Route path="events/enigma" element={<Enigma />} />
          <Route path="events/gallaxyquest" element={<GalaxyQuest />} />
          <Route path="events/interstellar" element={<Interstellar />} />
          <Route path="events/starlance" element={< Starlance/>} />



          {/* add other events here */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
