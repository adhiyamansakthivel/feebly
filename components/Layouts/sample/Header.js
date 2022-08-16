/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Header = () => {
    return (
        
        <nav className="bg-indigo-700 py-2 md:py-4">
            <div className="container px-4 mx-auto md:flex items-center">

                <div className="flex justify-between items-center">
                    <a href="#" className="font-bold text-xl text-white">feeblytech</a>
                    <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                    <i className="fas fa-bars"></i>
                    </button>
                </div>

                <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                    <a href="#" className="p-2 font-bold lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Home</a>
                    <a href="#" className="p-2 font-bold lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Technology</a>
                    <a href="#" className="p-2 font-bold lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Gadgets</a>
                    <a href="#" className="p-2 font-bold lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Entertainment</a>
                    <a href="#" className="p-2 font-bold lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Gaming</a>

                </div>
            </div>
        </nav>
    );
}

export default Header;
