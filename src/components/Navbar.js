import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-4xl mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg font-bold">E-Commerce</Link>
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/cart" className="text-white">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
