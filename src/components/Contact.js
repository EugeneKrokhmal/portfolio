// components/Contact.js
import React from 'react';
import CV from '../pdf/Eugene_Krokhmal_CV.pdf'

const Contact = ({ isOpen, onClose }) => {
    return (
        <div
            className={`z-50 fixed top-0 left-0 h-full md:w-1/4 bg-gray-900 text-white shadow-lg transform ${isOpen ? '-translate-x-0' : '-translate-x-full'
                } Contact transition-transform duration-300`}
        >
            <div className="p-4 max-h-screen overflow-auto pb-20">
                <svg
                    onClick={onClose}
                    className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <h2 className="text-2xl font-bold mt-4">Contact Information</h2>
                <div className="mt-4 space-y-4 mb-8">
                    <ul>
                        <li className="mb-2"><a href="tel:+48 516 020 738">+48 516 020 738</a></li>
                        <li className="mb-2"><a href="mailto:krokhmalugen@gmail.com">krokhmalugen@gmail.com</a></li>
                        <li className="mb-2">
                            <a
                                href="https://www.linkedin.com/in/eugenkrokhmal/"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li className="mb-2">
                            <a
                                href="https://github.com/EugeneKrokhmal"
                            >
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
                <a
                    href={CV}
                    download
                    className="relative inline-flex items-center justify-center p-0.5 mt-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800"
                >
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Download CV
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Contact;
