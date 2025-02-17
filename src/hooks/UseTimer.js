import { useState, useEffect } from "react";

const useTimer = (initialTime, onTimeUp) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft <= 0) {
            onTimeUp();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, onTimeUp]);

    const resetTimer = () => setTimeLeft(initialTime);

    return { timeLeft, resetTimer };
};

export default useTimer;
