import React, { useMemo } from "react";
import styles from "../styles.module.css";

interface FlickeringTextProps {
  text: string;
}

const generateDelays = (text: string) => {
    const delays = text.split("").map((_, i) => i * (0.3 / text.length));
    for (let i = delays.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [delays[i], delays[j]] = [delays[j], delays[i]];
    }
    return delays.map(d => `${d}s`);
};

const FlickeringText: React.FC<FlickeringTextProps> = ({ text }) => {
    const delays = useMemo(() => generateDelays(text), [text]);

    return (
        <span className={styles.flickeringText}>
            {text.split("").map((char, index) => (
                <span key={index} className={styles.char} style={{ animationDelay: delays[index] }}>
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </span>
    );
};

export default FlickeringText;
