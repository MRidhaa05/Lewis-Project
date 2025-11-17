import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import PlaceOrders from "./pages/PlaceOrders";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Partners from "./components/common/Partners";

import Footer from "./components/common/Footer";

const App = () => {
  return (
    <div className="px-4 sm:px-[-5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Product/:ProductId" element={<Product />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Place-Order" element={<PlaceOrders />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Partners" element={<Partners />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
