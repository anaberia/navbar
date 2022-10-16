import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./images/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
