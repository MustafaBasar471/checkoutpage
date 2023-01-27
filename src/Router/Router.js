import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage, Cart } from "../components";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
