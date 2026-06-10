import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Success from "./Pages/Success/Success";
import Order from "./Pages/Order";
import Received from "./Pages/Received";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import MyOrders from "./Pages/MyOrders/MyOrders";
import TrackOrder from "./Pages/TrackOrder/TrackOrder";
import ChefDetail from "./Pages/ChefDetail/ChefDetail";
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order" element={<Order />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/track-order/:orderId" element={<TrackOrder />} />
          <Route path="/received" element={<Received />} />
          <Route path="/success" element={<Success />} />
          <Route path="/chef/:id" element={<ChefDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster position="top-right" />
      </Router>
    </AuthProvider>
  );
};

export default App;
