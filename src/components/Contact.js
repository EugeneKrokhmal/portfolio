import React from 'react';
import CV from '../pdf/Eugene_Krokhmal_CV.pdf'

const Contact = ({ isOpen, onClose }) => {
    return (
        <aside
            className={`z-50 fixed top-0 left-0 h-full md:w-1/4 bg-gray-900 text-white shadow-lg transform ${isOpen ? '-translate-x-0' : '-translate-x-full'
                } Contact transition-transform duration-300`}
            role="dialog"
            aria-labelledby="contact-title"
            aria-hidden={!isOpen}
        >
            <div className="p-4 max-h-screen overflow-auto pb-20">
                <button
                    onClick={onClose}
                    className="w-6 h-6"
                    aria-label="Close contact form"
                >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 id="contact-title" className="text-2xl font-bold mt-4">Contact Information</h2>
                <div className="mt-4 space-y-4 mb-8">
                    <ul>
                        <li className="mb-2"><a href="tel:+48 516 020 738">+48 516 020 738</a></li>
                        <li className="mb-2"><a href="mailto:krokhmalugen@gmail.com">krokhmalugen@gmail.com</a></li>
                        <li className="mb-2">
                            <a
                                href="https://www.linkedin.com/in/eugenkrokhmal/"
                                aria-label="LinkedIn profile"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li className="mb-2">
                            <a
                                href={CV}
                                aria-label="Download CV"
                            >
                                Download CV
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default Contact;
