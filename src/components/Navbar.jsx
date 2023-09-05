import React from 'react';
import { Link, Route } from 'wouter';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-semibold">
          Home
        </Link>
        <div className="space-x-4">
          <Link to="/about" className="text-white">
            About
          </Link>
          <Link to="/portfolio" className="text-white">
            Portfolio
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
