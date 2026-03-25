import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import HomePage from "./landingpage/home/HomePage";
import AboutPage from "./landingpage/about/AboutPage";
import ProductPage from "./landingpage/products/ProductsPage";
import PricingPage from "./landingpage/pricing/PricingPage";
import SupportPage from "./landingpage/support/SupportPage";
import Navbar from "./landingpage/Navbar";
import Footer from "./landingpage/Footer";
import NotFound from "./landingpage/NotFound";

import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import AuthProvider from "./context/AuthContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <ToastContainer position="top-right" />

    </BrowserRouter>
  </AuthProvider>
);




