import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeCard from "./components/HomeCard";
import Login from "./components/Login";
import Year from "./components/Year"; // Import Year component
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Navbar appears on all pages */}
        <Navbar />
        <Routes>
          {/* Home page with HomeCard */}
          <Route path="/" element={<HomeCard />} />

          {/* Login page */}
          <Route path="/login" element={<Login />} />

          {/* Year page */}
          <Route path="/year" element={<Year />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
