// App.js
import React, { useState, useRef, useEffect } from 'react';
import Section from './components/Section';
import Drawer from './components/Drawer';
import sectionsData from './data/sectionsData';
import Navbar from './components/Navbar';
import backgroundMusic from './audio/REDLIGHT - 9TS BABY (DISRUPTA BOOTLEG).mp3';

function App() {
    const sectionsRef = useRef([]);
    const audioRef = useRef(null);
    const [currentSection, setCurrentSection] = useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [isFunMode, setFunMode] = useState(false);
    const [isFlashing, setIsFlashing] = useState(false);

    const scrollToSection = (index) => {
        const nextIndex = (index + sectionsData.length) % sectionsData.length;
        if (isDrawerOpen) {
            handleCloseDrawer().then(() => {
                setCurrentSection(nextIndex);
                sectionsRef.current[nextIndex]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        } else {
            setCurrentSection(nextIndex);
            sectionsRef.current[nextIndex]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const handleMusicToggle = () => {
        if (audioRef.current) {
            if (isMusicPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch((error) => {
                    console.log("Error playing audio: ", error);
                });
            }
            setIsMusicPlaying(!isMusicPlaying);
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
            audioRef.current.play().catch((error) => {
                console.log("Error playing audio: ", error);
            });
        }
    }, []);

    const triggerFlashEffect = () => {
        setIsFlashing(isFlashing ? false : true);
    };

    const handleOpenDrawer = (index) => {
        setCurrentSection(index);
        setIsDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        return new Promise((resolve) => {
            setIsDrawerOpen(false);
            setTimeout(() => resolve(), 300);
        });
    };

    const ToggleFunMode = () => {
        setFunMode(isFunMode ? false : true);
        // triggerFlashEffect();
        handleMusicToggle();
    }

    return (
        <div className={`h-screen w-full relative overflow-hidden`}>

            <Navbar />

            {isFlashing && (
                <div className="fixed top-0 left-0 w-full h-full bg-white opacity-75 z-50 pointer-events-none animate-flash"></div>
            )}

            <audio ref={audioRef} src={backgroundMusic} loop />

            {sectionsData.map((section, index) => (
                <div
                    className={`transition-transform duration-300 pt-16 ${isDrawerOpen ? '-translate-x-1/4' : 'translate-x-0'}`}
                    key={index} ref={(el) => (sectionsRef.current[index] = el)}>
                    <Section
                        {...section}
                        funMode={isFunMode}
                        onOpenDrawer={handleOpenDrawer}
                        onOpen={() => handleOpenDrawer(index)}
                    />
                </div>
            ))}
            <div className="lg:px-16 container max-w-screen-xl mx-auto fixed z-50 bottom-6 left-4 right-4 flex gap-2 w-full">
                <button
                    onClick={() => scrollToSection(currentSection - 1)}
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                        Previous
                    </span>
                </button>
                <button
                    onClick={() => scrollToSection(currentSection + 1)}
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                >
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                        Next
                    </span>
                </button>

                <button
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-500 to-blue-500 group-hover:from-green-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                    onClick={ToggleFunMode}>
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                        Fun Mode
                    </span>
                </button>

                {isFunMode && (
                    <>
                        <button
                            onClick={handleMusicToggle}
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-500 to-blue-500 group-hover:from-green-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                {isMusicPlaying ? 'Pause' : 'Play'}
                            </span>
                        </button>
                        <button
                            onClick={triggerFlashEffect}
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-yellow-500 group-hover:from-red-500 group-hover:to-yellow-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800"
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                Flash
                            </span>
                        </button>
                    </>
                )}
            </div>

            <Drawer
                isOpen={isDrawerOpen}
                onClose={handleCloseDrawer}
                data={sectionsData[currentSection]}
            />
        </div>
    );
}

export default App;