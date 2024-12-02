// components/Navbar.js
import React from 'react';

const Navbar = ({ funMode, handleOpenDrawer }) => {
    return (
        <nav className={`${funMode ? 'bg-black' : 'bg-white'} fixed md:left-1/4 w-full z-20 top-0 start-0 md:pl-16`}>
            <div className="max-w-screen-xl h-10 flex flex-wrap items-center justify-between px-4 lg:px-0">
                <a href="/" className="flex items-center">
                    <span className={`${funMode ? 'text-white' : ''} self-center text-m font-bold whitespace-nowrap`}>Eugene Krokhmal</span>
                </a>
                <ul className="flex flex-col">
                    <li>
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                handleOpenDrawer('contact');
                            }}
                            href="#" className={`${funMode ? 'text-white' : ''} text-sm py-2 px-3 text-gray-900 md:p-0`}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
