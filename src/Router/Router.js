import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage, Cart, Checkout, ComplateOrder } from "../components";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/order-complate" element={<ComplateOrder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
