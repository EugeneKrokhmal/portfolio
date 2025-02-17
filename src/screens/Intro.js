import { useState, useEffect } from "react";
import Button from "../components/Button";

const Intro = ({ setUsername, setIsAnimating }) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const savedUsername = localStorage.getItem("username");
        if (savedUsername) {
            setInputValue(savedUsername);
            setUsername(savedUsername);
        }
    }, [setUsername]);

    const handleEnter = () => {
        if (inputValue.trim()) {
            localStorage.setItem("username", inputValue);
            setUsername(inputValue);
            setIsAnimating(true);
        }
    };

    return (
        <section
            className="h-screen w-full flex flex-col items-center justify-center text-green-400 font-mono p-4"
        >
            <h1 className="max-w-2xl mb-4 mt-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                {"> Welcome"}
            </h1>
            <div className="border border-green-400 w-full max-w-md">
                <fieldset className="p-2">
                    <label>{"> Enter your name:"}</label>
                    <input
                        className="text-shadow w-full bg-transparent text-green-400 border-none outline-none resize-none p-2"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </fieldset>
                {inputValue && (
                    <div className="relative w-full">
                        <div className="absolute top-0 right-0 pt-2">
                            <Button onClick={handleEnter} text={"Start"} />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Intro;
