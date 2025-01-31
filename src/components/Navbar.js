// components/Navbar.js
import React from 'react';

const Navbar = ({ funMode, handleOpenDrawer }) => {
    return (
        <nav className={`${funMode ? 'bg-black' : 'bg-white'} xl:w-2/4 fixed h-10 md:left-1/4 md:right-0 xl:right-1/4 z-20 top-0 start-0`}>
            <div className="h-10 flex md:ml-auto flex-wrap items-center justify-between px-4 lg:px-16">
                <a href="/" className="inline-flex items-center">
                    <span className={`${funMode ? 'text-white' : ''} self-center text-m font-bold whitespace-nowrap`}>Eugene Krokhmal</span>
                </a>
                <ul className="inline-flex flex-col">
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
