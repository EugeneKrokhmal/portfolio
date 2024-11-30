// components/Navbar.js
import React, { useState } from 'react';
import Contact from './Contact';

const Navbar = ({ funMode }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleOpenDrawer = (index) => {
        setIsDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        return new Promise((resolve) => {
            setIsDrawerOpen(false);
            setTimeout(() => resolve(), 300);
        });
    };

    return (
        <nav className={`${funMode ? 'bg-black' : 'bg-white'} fixed w-full z-20 top-0 start-0 border-b border-gray-200`}>
            <div className="max-w-screen-xl h-16 flex flex-wrap items-center justify-between mx-auto px-4 lg:px-16 ">
                <a href="/" className="flex items-center">
                    <span className={`${funMode ? 'text-white' : ''} self-center text-xl font-bold whitespace-nowrap`}>Eugene Krokhmal</span>
                </a>
                <ul className="flex flex-col">
                    <li>
                        <a
                            onClick={handleOpenDrawer}
                            href="#" className={`${funMode ? 'text-white' : ''} block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0`}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            <Contact
                isOpen={isDrawerOpen}
                onClose={handleCloseDrawer}
            />
        </nav>
    );
};

export default Navbar;
