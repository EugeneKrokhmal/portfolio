import { useState, useEffect } from 'react';

const SESSION_KEY = 'portfolio-bsod-shown';
const TIMEOUT_MIN_MS = 10_000;
const TIMEOUT_MAX_MS = 20_000;

const hasShownThisSession = () => sessionStorage.getItem(SESSION_KEY) === '1';

const useRandomBSOD = (enabled) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (!enabled || hasShownThisSession()) return;

        const delay =
            TIMEOUT_MIN_MS + Math.random() * (TIMEOUT_MAX_MS - TIMEOUT_MIN_MS);

        const timeoutId = setTimeout(() => {
            if (hasShownThisSession()) return;
            sessionStorage.setItem(SESSION_KEY, '1');
            setActive(true);
            document.body.style.overflow = 'hidden';
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [enabled]);

    return active;
};

export default useRandomBSOD;
