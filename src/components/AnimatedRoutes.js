import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Yellow from "../pages/Yellow";
import Green from "../pages/Green";
import Blue from "../pages/Blue";

function AnimatedRoutes() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/green" element={<Green />} />
        <Route path="/yellow" element={<Yellow />} />
        <Route path="/blue" element={<Blue />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
