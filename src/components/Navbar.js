import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">@ultraaryan10</Link>
      <Link to="/"></Link>
      <Link to="/about">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/education">Education</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
