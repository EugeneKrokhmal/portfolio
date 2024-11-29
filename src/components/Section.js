// components/Section.js
import React from 'react';
import Webp from 'react-image-webp';
import Video from "../video/bg.gif";
import TypingText from './TypingText';

const Section = ({ title, techStack, description, images, isDark, onOpen, star, avatar, bg, funMode }) => {
    return (
        <section
            style={funMode ? { 'background': `url(${Video})`, 'background-size': 'cover' } : {}}
            className={`z-20 relative max-h-screen min-h-screen w-full flex md:justify-center md:items-center
                }`}
        >
            <div className="grid max-w-screen-xl py-8 md:py-0 px-4 mx-auto lg:gap-8 xl:gap-0 lg:px-16 lg:grid-cols-12">
                <div className="relative z-50 mr-auto md:place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 mt-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                        {title}
                    </h1>
                    <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">{<TypingText text={description} speed={20} />}</p>
                    <div className="flex flex-wrap mb-6 gap-2">
                        {techStack.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
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
                    <div className="w-64 bottom-0 right-0 z-0 absolute lg:w-3/4 md:static lg:block mx-auto lg:col-span-5">
                        <img
                            className="w-3/4 object-cover rounded-full overflow-hidden ml-auto"
                            src={avatar} />
                    </div>
                )}
                {images && (
                    <div className="w-64 bottom-0 right-0 z-0 absolute lg:w-3/4 md:static lg:block mx-auto lg:col-span-5">
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
