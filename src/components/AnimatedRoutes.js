import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Yellow from "../pages/Yellow";
import Green from "../pages/Green";
import Blue from "../pages/Blue";
import Cart from "../pages/Cart";

function AnimatedRoutes() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route path="/orders" element={<Green />} />
        <Route path="/home" element={<Yellow />} />
        <Route path="/billing" element={<Blue />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<Yellow />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
