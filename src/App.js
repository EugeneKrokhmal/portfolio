import React, { useState, useRef, useEffect } from 'react';
import Section from './components/Section';
import Drawer from './components/Drawer';
import sectionsData from './data/sectionsData';
import Navbar from './components/Navbar';
import FullScreenMap from './components/FullScreenMap';
import Button from './components/Button';
import backgroundMusic from './audio/REDLIGHT - 9TS BABY (DISRUPTA BOOTLEG).mp3';
import Video from "./video/bg.mp4";
import Cyber from './images/cyber.gif';
import 'leaflet/dist/leaflet.css';
import Contact from './components/Contact';

function App() {
    const sectionsRef = useRef([]);
    const audioRef = useRef(null);
    const [currentSection, setCurrentSection] = useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const [isFunMode, setFunMode] = useState(false);

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
                    console.log('Error playing audio: ', error);
                });
            }
            setIsMusicPlaying(!isMusicPlaying);
        }
    };

    const handleOpenDrawer = (type) => {
        if (type === 'contact') {
            setIsContactOpen(!isContactOpen);
        } else {
            setIsContactOpen(false);
            setIsDrawerOpen(true);
        }
    };

    const handleCloseDrawer = () => {
        return new Promise((resolve) => {
            setIsDrawerOpen(false);
            setIsContactOpen(false);
            setTimeout(() => resolve(), 300);
        });
    };

    const toggleFunMode = () => {
        const newFunModeState = !isFunMode;
        setFunMode(newFunModeState);

        if (newFunModeState) {
            handleMusicToggle();
        } else {
            if (isMusicPlaying) {
                handleMusicToggle();
            }
        }
    };

    useEffect(() => {
        if (!isFunMode && isMusicPlaying) {
            handleMusicToggle();
        }
    }, [isFunMode]);

    const activeLocation = sectionsData[currentSection]?.location || [];

    return (
        <>
            <Navbar
                funMode={isFunMode}
                handleOpenDrawer={handleOpenDrawer}
                aria-label="Navigation bar"
            />
            <div
                className={`flex h-full bg-gradient transition-transform duration-300 ${isDrawerOpen ? '-translate-x-1/4' : 'translate-x-0'}`}
                role="main"
                aria-live="polite"
            >
                {activeLocation && activeLocation.length > 0 &&
                    <FullScreenMap
                        isDrawerOpen={isDrawerOpen}
                        points={activeLocation}
                        isFunMode={isFunMode}
                        aria-label="Full screen map"
                    />
                }
                <div
                    className={`z-20 h-full flex md:w-3/4 md:ml-auto overflow-hidden`}
                    role="complementary"
                    aria-label="Main content"
                >

                    {isFunMode && (
                        <>
                            <video
                                className="fixed md:left-1/4 w-full h-full top-0 left-0 object-cover"
                                src={Video}
                                mute
                                autoPlay
                                muted
                                playsInline
                                loop
                                aria-hidden="true"
                            >
                                <source src={Video} />
                            </video>

                            <div
                                className="absolute w-1/3 h-1/3 bottom-0 right-0 object-cover opacity"
                                style={isFunMode ? { 'background': `url(${Cyber})`, 'backgroundSize': '150px' } : {}}
                                aria-hidden="true"
                            ></div>
                        </>
                    )}

                    <audio ref={audioRef} src={backgroundMusic} loop aria-label="Background music" />

                    <ol>
                        {sectionsData.map((section, index) => (
                            <li
                                className="h-full"
                                key={index}
                                ref={(el) => (sectionsRef.current[index] = el)}
                                aria-label={`Section ${index + 1}`}
                            >
                                <Section
                                    {...section}
                                    funMode={isFunMode}
                                    onOpenDrawer={handleOpenDrawer}
                                    onOpen={() => handleOpenDrawer(index)}
                                />
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="xl:w-2/4 fixed h-10 md:left-1/4 md:right-0 md:px-16 z-20 bottom-6 left-4 md:left-1/4 right-4 flex gap-2">
                    <Button
                        onClick={() => scrollToSection(currentSection - 1)}
                        styleClasses="bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                        text="Previous"
                        aria-label="Previous section"
                    />
                    <Button
                        onClick={() => scrollToSection(currentSection + 1)}
                        styleClasses="bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                        text="Next"
                        aria-label="Next section"
                    />
                    <Button
                        onClick={toggleFunMode}
                        styleClasses="ml-auto bg-gradient-to-br from-green-500 to-blue-500 group-hover:from-green-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                        text="Fun Mode"
                        aria-label="Toggle fun mode"
                    />
                    {isFunMode && (
                        <Button
                            onClick={handleMusicToggle}
                            styleClasses="bg-gradient-to-br from-green-500 to-blue-500 group-hover:from-green-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                            aria-label={isMusicPlaying ? 'Pause music' : 'Play music'}
                        >
                            {isMusicPlaying ? 'Pause' : 'Play'}
                        </Button>
                    )}
                </div>
            </div>

            <Drawer
                isOpen={isDrawerOpen}
                onClose={handleCloseDrawer}
                data={sectionsData[currentSection]}
                aria-label="Drawer"
            />

            <Contact
                isOpen={isContactOpen}
                onClose={handleCloseDrawer}
                aria-label="Contact form"
            />
        </>
    );
}

export default App;