import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';
import useClickOutside from '../hooks/ClickOutside';

const Navbar = () => {
    const navigate = useNavigate();
    const { searchQuery, setSearchQuery } = useSearch();
    const [showSearch, setShowSearch] = useState(false);
    const searchRef = useRef(null);

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchQuery.trim() !== '') {
            navigate('/search');
        }
    };

    const closeSearch = () => {
        setShowSearch(false);
    };

    useClickOutside(searchRef, closeSearch);

    return (
        <>
            <nav className={`fixed h-24 w-full z-50 top-0 start-0 ${showSearch ? 'blur' : ''}`}>
                <div className="h-full px-4 md:px-24 mx-auto flex flex-wrap items-center justify-between">
                    <Link to="/portfolio" className="flex items-center">
                        <span className="self-center text-m font-bold whitespace-nowrap text-green-400 hover:text-yellow-300">
                            Eugene Krokhmal/
                        </span>
                    </Link>
                    <ul className="w-full md:max-w-96 flex gap-2 justify-between">
                        <li>
                            <Link
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate('/experience');
                                }}
                                className="text-sm text-green-400 hover:text-yellow-300"
                            >
                                career/
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate('/approach');
                                }}
                                className="text-sm text-green-400 hover:text-yellow-300"
                            >
                                approach/
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate('/projects');
                                }}
                                className="text-sm text-green-400 hover:text-yellow-300"
                            >
                                projects/
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate('/contact');
                                }}
                                className="text-sm text-green-400 hover:text-yellow-300"
                            >
                                contact/
                            </Link>
                        </li>
                        <li className="relative flex items-center">
                            <button className="search ml-2" onClick={() => setShowSearch(!showSearch)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="16px" height="16px" className='text-shadow hover:text-yellow-300 text-green-400'>
                                    <path
                                        className=''
                                        fill="currentColor"
                                        d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"
                                    />
                                </svg>
                            </button>
                        </li>                        
                    </ul>
                </div>
            </nav>

            <input
                ref={searchRef}
                type="text"
                className={`${showSearch ? 'translate-y-0' : '-translate-y-24'
                    } transition-transform fixed h-16 z-50 top-8 start-4 right-4 md:start-24 md:right-24 border border-yellow-400 bg-transparent text-yellow-400 outline-none resize-none p-2 search-input`}
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
            />
        </>
    );
};

export default Navbar;
