import React, { useState, useEffect } from 'react';

const Loader = ({ text, textColor = '#000', highlightColor = '#f00', adjacentColor }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const radius = 25;
    const calculateFontSize = () => {
        const circumference = 2 * Math.PI * radius;
        return (circumference / text.length) * 1.5;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % text.length);
        }, 80);
        return () => clearInterval(interval);
    }, [text.length]);

    const generateStyledText = () => {
        return text.split('').map((char, index) => {
            const distance = Math.abs(index - activeIndex);
            let color = textColor;

            if (distance === 0) {
                color = highlightColor;
            } else if (distance === 1 || distance === text.length - 1) {
                color = adjacentColor;
            }

            return (
                <tspan key={index} fill={color}>
                    {char}
                </tspan>
            );
        });
    };

    return (
        <div style={{ animation: ' 1s infinite', display: 'block', margin: 'auto', position: 'fixed', inset: 0, width: '150px', height: '150px' }}>
            <svg width="100%" height="100%" viewBox="0 0 150 150" overflow="visible">
                <defs>
                    <path
                        id="textPath"
                        d={`
              M ${150 - radius},150
              a ${radius},${radius} 0 1,1 ${2 * radius},0
              a ${radius},${radius} 0 1,1 -${2 * radius},0
            `}
                    />
                </defs>
                <text fontSize={calculateFontSize()}>
                    <textPath href="#textPath" startOffset="50%" textAnchor="middle">
                        {generateStyledText()}
                    </textPath>
                </text>
            </svg>
        </div>
    );
};

export default Loader;
