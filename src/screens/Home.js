import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = ({ username: propUsername }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState(propUsername || "");

    useEffect(() => {
        if (!propUsername) {
            const savedUsername = localStorage.getItem("username");
            if (savedUsername) {
                setUsername(savedUsername);
            }
        }
    }, [propUsername]);

    return (
        <section className="h-screen w-full flex flex-col items-center justify-center text-green-400 font-mono">
            <h1 className="text-shadow max-w-2xl mb-4 mt-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                {username ? `> Welcome to my portfolio, ${username}!` : "> Welcome to my portfolio!"}
            </h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-yellow-400">
                Let me show you some projects I worked on.
            </p>
            <div className="flex gap-4 items-center">
                <Button onClick={() => navigate('/projects')} text={'Projects'} />
                <span>OR</span>
                <Button onClick={() => navigate('/quiz')} text={'Play a game?'} />
            </div>
        </section>
    );
};

export default Home;
