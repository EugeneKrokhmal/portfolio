import React from 'react';
import CV from '../pdf/Eugene_Krokhmal_CV.pdf';

const Contact = () => {
    return (
        <div className="py-24 min-h-screen">
            <h2 id="contact-title" className="text-2xl font-bold text-white mt-4">Contact Information</h2>
            <ul className="mt-4 space-y-4 mb-8">
                <li className="mb-2">
                    <a href="tel:+48 516 020 738" className="text-green-400 hover:text-yellow-300 transition-colors duration-200">
                        +48 516 020 738
                    </a>
                </li>
                <li className="mb-2">
                    <a href="mailto:krokhmalugen@gmail.com" className="text-green-400 hover:text-yellow-300 transition-colors duration-200">
                        krokhmalugen@gmail.com
                    </a>
                </li>
                <li className="mb-2">
                    <a
                        href="https://www.linkedin.com/in/eugenkrokhmal/"
                        aria-label="LinkedIn profile"
                        className="text-green-400 hover:text-yellow-300 transition-colors duration-200"
                    >
                        LinkedIn
                    </a>
                </li>
                <li className="mb-2">
                    <a
                        href={CV}
                        aria-label="Download CV"
                        className="text-green-400 hover:text-yellow-300 transition-colors duration-200"
                    >
                        Download CV
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
