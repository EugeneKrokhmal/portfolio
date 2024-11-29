// components/TypingText.js
import React, { useState, useEffect } from 'react';

const TypingText = ({ text, speed = 100 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeoutId);
        }
    }, [index, text, speed]);

    return (
        <span>{displayedText}</span>
    );
};

export default TypingText;
