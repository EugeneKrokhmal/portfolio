import React from 'react';

const Button = ({ onClick, text, styleClasses = '', children, ariaLabel }) => (
    <button
        onClick={onClick}
        className={`transition-all bg-green-400 text-green-400 box-shadow px-4 py-2 hover:bg-green-300 hover:text-white-300 ${styleClasses}`}
        aria-label={ariaLabel}
    >
        <span className="text-black font-bold">
            {text || children}
        </span>
    </button>
);

export default Button;
