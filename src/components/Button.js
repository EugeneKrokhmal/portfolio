import React from 'react';

const Button = ({ onClick, text, styleClasses = '', children, ariaLabel }) => (
    <button
        onClick={onClick}
        className={`relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group ${styleClasses}`}
        aria-label={ariaLabel}
    >
        <span className="relative px-1 py-1 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            {text || children}
        </span>
    </button>
);

export default Button;
