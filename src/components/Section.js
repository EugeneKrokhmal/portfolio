// components/Section.js
import React, { useEffect, useState } from 'react';
import Webp from 'react-image-webp';
import Video from "../video/bg.mp4";
import Cyber from '../images/cyber.gif';
import TypingText from './TypingText';


const Section = ({ title, techStack, description, images, isDark, onOpen, star, avatar, avatarFun, bg, funMode }) => {
    const [bgColors, setBgColors] = useState(techStack.map(() => '#000000'));

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    useEffect(() => {
        let interval;
        if (funMode) {
            interval = setInterval(() => {
                setBgColors(techStack.map(() => getRandomColor()));
            }, 300);
        } else {
            setBgColors(techStack.map(() => '#000000'));
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [funMode, techStack]);

    return (
        <section
            className={`z-20 relative max-h-screen min-h-screen w-full flex md:justify-center md:items-center ${funMode ? 'animate-vibe' : ''}`}
        >
            {funMode && (
                <>
                    <video
                        className="absolute w-full h-full top-0 left-0 object-cover"
                        src={Video}
                        autoplay
                        mute
                        autoPlay
                        muted
                        playsInline
                        loop>
                        <source src={Video} />
                    </video>

                    <div
                        className="absolute w-1/3 h-1/3 bottom-0 right-0 object-cover opacity"
                        style={funMode ? { 'background': `url(${Cyber})`, 'backgroundSize': '150px' } : {}}>
                    </div>
                </>
            )}

            <div
                className="grid max-w-screen-xl py-16 md:py-0 px-4 mx-auto lg:gap-8 xl:gap-0 lg:px-16 lg:grid-cols-12">
                <div className="relative z-50 mr-auto md:place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 mt-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                        {title}
                    </h1>
                    <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">{<TypingText text={description} speed={20} />}</p>
                    <div className="flex flex-wrap mb-6 gap-2">
                        {techStack.map((tech, index) => (
                            <span
                                key={index}
                                style={{
                                    backgroundColor: bgColors[index]
                                }}
                                className="text-gray-100 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    {star && (
                        <button
                            onClick={onOpen}
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                Learn More
                            </span>
                        </button>
                    )}
                </div>
                {avatar && (
                    <div className="w-64 bottom-0 right-0 z-0 absolute lg:w-4/12 mx-auto lg:col-span-5">
                        <img
                            className="w-3/4 object-cover overflow-hidden ml-auto"
                            src={funMode ? avatarFun : avatar} />
                    </div>
                )}
                {images && (
                    <div className="w-48 bottom-0 right-0 z-0 absolute lg:w-2/3 md:static lg:block mx-auto lg:col-span-5">
                        <div className="overflow-hidden relative">
                            <Webp src={images[0]} webp={images[0]} className="" alt={title} />
                            <Webp
                                src={images[1]}
                                webp={images[1]}
                                className="absolute bottom-0 w-3/5 right-0"
                                alt={`${title} Front`}
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Section;
