// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/">Student List</Link>
    <Link to="/register">Register Student</Link>
  </nav>
);

export default Navbar;
