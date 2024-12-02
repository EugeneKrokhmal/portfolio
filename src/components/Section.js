// components/Section.js
import React, { useEffect, useState } from 'react';
import Webp from 'react-image-webp';
import Button from './Button';

const Section = ({ title, techStack, description, images, onOpen, star, avatar, avatarFun, funMode, role, date }) => {
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
            className={`z-20 w-full h-full flex flex-col md:justify-center md:items-start`}
        >
            <div
                className="grid max-w-screen-xl py-16 md:py-0 px-4 mx-auto lg:gap-8 xl:gap-0 lg:px-16 lg:grid-cols-12">
                <div className="relative z-50 mr-auto md:place-self-center lg:col-span-7">
                    <h1 className={`${funMode ? 'animate-vibe delay-1000' : ''} max-w-2xl mb-4 mt-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl`}>
                        {title}
                    </h1>
                    {date &&
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
                    }
                    {role &&
                        <h3 className="text-md font-semibold mb-2">{role}</h3>
                    }
                    <p className={` ${funMode ? 'animate-vibe' : ''} max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl`}>{description}</p>
                    <div className="flex flex-wrap mb-6 gap-2">
                        {techStack.map((tech, index) => (
                            <span
                                key={index}
                                style={{
                                    backgroundColor: bgColors[index]
                                }}
                                className={` ${funMode ? 'animate-vibe' : ''} text-gray-100 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {star && (
                        <Button
                            onClick={onOpen}
                            styleClasses={` ${funMode ? 'animate-vibe' : ''} relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800`}
                            text="Read More"
                        />
                    )}
                </div>
                {avatar && (
                    <div className="w-64 bottom-0 right-0 z-0 absolute lg:w-4/12 mx-auto lg:col-span-5">
                        <img
                            className={`${funMode ? 'animate-vibe' : ''} w-3/4 object-cover overflow-hidden ml-auto`}
                            src={funMode ? avatarFun : avatar} />
                    </div>
                )}
                {images && (
                    <div className={`${funMode ? 'animate-vibe' : ''} w-48 bottom-0 right-0 z-0 absolute lg:w-2/3 md:static lg:block mx-auto lg:col-span-5`}>
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
