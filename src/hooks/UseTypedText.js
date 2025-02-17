import { useState, useEffect, useRef } from "react";

const useTypedText = (fullText, typingSpeed = 15) => {
    const [typedText, setTypedText] = useState("");
    const typingIntervalRef = useRef(null);

    useEffect(() => {
        let i = 0;
        setTypedText("");

        if (fullText && fullText.length > 0) {
            clearInterval(typingIntervalRef.current);
            typingIntervalRef.current = setInterval(() => {
                setTypedText(fullText.substring(0, i + 1));
                i++;
                if (i >= fullText.length) clearInterval(typingIntervalRef.current);
            }, typingSpeed);
        }

        return () => clearInterval(typingIntervalRef.current);
    }, [fullText, typingSpeed]);

    return typedText;
};

export default useTypedText;
