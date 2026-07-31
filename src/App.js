import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./screens/Contact";
import BlurLayers from "./components/BlurLayers";
import Intro from "./screens/Intro";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Experience from "./screens/Experience";
import { SearchProvider } from "./context/SearchContext";
import SearchResults from "./screens/SearchResults";
import Approach from "./screens/Approach";
import CRTEffect from './context/CRTEffect'
import { useNavigate } from "react-router-dom";
import Quiz from "./screens/Quiz";
import ScrollToTop from "./components/ScrollToTop";
import BSOD from "./components/BSOD";
import useRandomBSOD from "./hooks/useRandomBSOD";

function App() {
    const [username, setUsername] = useState("");
    const [entered, setEntered] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const bsodActive = useRandomBSOD(location.pathname !== "/portfolio");

    const handleStart = () => {
        navigate("/home");
        setIsAnimating(false)
    }

    return (
        <>
            {bsodActive && <BSOD />}
            <CRTEffect>
                <SearchProvider>
                    <ScrollToTop />
                    <Navbar aria-label="Navigation bar" />

                    <main
                        onAnimationEnd={handleStart}
                        className={`px-4 md:px-24 h-full ${isAnimating ? "bios" : ""}`}
                        role="complementary"
                        aria-label="Main content"
                    >
                        <Routes>
                            <Route path="/portfolio" element={<Intro setEntered={setEntered} setUsername={setUsername} setIsAnimating={setIsAnimating} />} />
                            <Route path="/home" element={<Home username={username} />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/experience" element={<Experience />} />
                            <Route path="/search" element={<SearchResults />} />
                            <Route path="/approach" element={<Approach />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/quiz" element={<Quiz />} />
                        </Routes>
                    </main>

                    <div className="fixed h-24 w-full top-0 rotate-180">
                        <BlurLayers />
                    </div>

                    <div className="fixed h-24 w-full bottom-0">
                        <BlurLayers />
                    </div>
                </SearchProvider>
            </CRTEffect>
        </>
    );
}

export default App;
