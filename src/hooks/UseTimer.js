import { useState, useEffect } from "react";

const useTimer = (initialTime, onTimeUp) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft <= 0) {
            onTimeUp(); // Call function when time is up
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer); // Cleanup on unmount or reset
    }, [timeLeft, onTimeUp]);

    const resetTimer = () => setTimeLeft(initialTime);

    return { timeLeft, resetTimer };
};

export default useTimer;
