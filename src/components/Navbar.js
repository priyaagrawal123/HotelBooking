import React from 'react';
import { Link } from 'react-router-dom';
// import logo3 from "./components/logo3.png";
function Navbar() {
    // const logo = require('/components/logo2.png'); // Adjust the path based on where your logo image is stored
    return (
        <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">
                    <h1>HotelBookings.com</h1>
                    {/* <img src={logo3}></img> */}
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="/affordable" className="text-white hover:text-gray-400">🏡 Affordable</Link>
                    <Link to="/3star" className="text-white hover:text-gray-400">⭐⭐⭐ 3-Star Hotels</Link>
                    <Link to="/5star" className="text-white hover:text-gray-400">⭐⭐⭐⭐⭐ 5-Star Hotels</Link>
                    <Link to="/luxury" className="text-white hover:text-gray-400">✨ Extra Luxury</Link>
                    <Link to="/login" className="text-black bg-gray-800 py-2 px-4 rounded hover:bg-gray-600 ml-4 bg-white">Login</Link>
                    <Link to="/signup" className="text-black bg-gray-800 py-2 px-4 rounded hover:bg-gray-600 bg-white">Signup</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
