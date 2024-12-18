import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <svg
          className="logo-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#2563eb"
          width="40px"
          height="40px"
        >
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
          <path d="M12 7c-2.757 0-5 2.243-5 5h2c0-1.654 1.346-3 3-3V7zm3 8h2c0-2.757-2.243-5-5-5v2c1.654 0 3 1.346 3 3z" />
        </svg>
        <span className="logo-text">
          <strong>Insight</strong>
        </span>
      </div>

      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/login">Log In</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
