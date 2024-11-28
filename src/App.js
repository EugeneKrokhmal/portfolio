import React, { useState, useRef } from 'react';
import SCimg from './images/hand-holding-phone-mockup (1).png';
import GBimg from './images/hand-holding-phone-mockup (2).png';
import Trpimg from './images/hand-holding-phone-mockup (3).png';
import CAimg from './images/hand-holding-phone-mockup (4).png';
import GLOimg from './images/hand-holding-phone-mockup.jpg';

const sectionsData = [
    {
        title: 'SpoiledChild™',
        description: `SpoiledChild uses an AI algorithm it calls SpoiledBrain, which crunched over 250,000 data points gathered from focus groups and sister-brand Il Makiage to formulate products and provide recommendations to customers.`,
        techStack: ['HTML', 'CSS', 'Magento 2', 'MYSQL', 'JavaScript', 'Knockout JS', 'PHP'],
        image: SCimg,
        link: 'https://www.spoiledchild.com/',
    },
    {
        title: 'Tripper',
        description: `Tripper is a full-stack web application designed to streamline the management and settlement of group trip expenses. Built with cutting-edge technologies, including TypeScript, React, Node.js, and MongoDB.`,
        techStack: ['HTML', 'CSS', 'React', 'MongoDB', 'TypeScript', 'Express.js', 'NodeJS'],
        image: Trpimg,
        link: 'https://www.tripper.cc/',
    },
    {
        title: 'Gina Bacconi',
        description: `Gina Bacconi is a British womenswear designer clothing brand with boutiques across multiple countries.`,
        techStack: ['HTML', 'CSS', 'Magento 2', 'MYSQL', 'JavaScript', 'Knockout JS', 'PHP'],
        image: GBimg,
        link: 'https://ginabacconi.com/',
    },
    {
        title: 'Casinopro',
        description: `Ontario’s most trusted casino comparison site—a one-stop shop for Ontario players looking for anything online casino-related.`,
        techStack: ['HTML', 'CSS', 'React', 'MYSQL', 'JavaScript', 'PHP', 'WordPress'],
        image: CAimg,
        link: 'https://casinopro.ca/',
    },
    {
        title: 'Tobacco Company (NDA)',
        description: `Details under NDA.`,
        techStack: ['HTML', 'CSS', 'Magento 2', 'MYSQL', 'JavaScript', 'PHP', 'Docker'],
        image: GLOimg,
        link: '#',
    },
];

const Section = ({ title, description, techStack, image, link, isDark }) => {
    return (
        <section
            className={`h-screen w-full flex justify-center items-center ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'
                }`}
        >
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                        {title}
                    </h1>
                    <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">{description}</p>
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
                    {link && (
                        <a
                            href={link}
                            className=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Website
                                </span>
                            </button>
                        </a>
                    )}
                </div>
                <div className="hidden lg:block relative mx-auto lg:col-span-5">
                    <div className="rounded-xl overflow-hidden w-[272px] h-[572px] bg-white shadow-xl dark:bg-gray-800">
                        <img src={image} className="w-[272px] h-[572px]" alt={title} />
                    </div>
                </div>
            </div>
        </section>
    );
};

function App() {
    const sectionsRef = useRef([]);
    const [currentSection, setCurrentSection] = useState(0);

    const scrollToSection = (index) => {
        // Handle looping
        const nextIndex = (index + sectionsData.length) % sectionsData.length;
        setCurrentSection(nextIndex);
        sectionsRef.current[nextIndex]?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="h-screen w-full relative overflow-hidden">
            {sectionsData.map((section, index) => (
                <div key={index} ref={(el) => (sectionsRef.current[index] = el)}>
                    <Section {...section} />
                </div>
            ))}
            <div className="fixed bottom-4 right-4 flex gap-4">
                <button
                    onClick={() => scrollToSection(currentSection - 1)}
                    class="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Previous
                    </span>
                </button>
                <button
                    onClick={() => scrollToSection(currentSection + 1)}
                    class="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Next
                    </span>
                </button>
            </div>
        </div>
    );
}

export default App;
