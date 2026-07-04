import { useEffect, useRef } from "react";
import styles from "./styles.module.css";

export default function EyeTracking() {
    const eyesContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (!eyesContainerRef.current) return;

            const rect = eyesContainerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const dx = event.clientX - centerX;
            const dy = event.clientY - centerY;

            const maxRotation = 30;
            const distance = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2) / 2;

            const rawRotateY = (dx / distance) * maxRotation * 5;
            const rawRotateX = -(dy / distance) * maxRotation * 5;

            const rotateY = Math.max(-maxRotation, Math.min(maxRotation, rawRotateY));
            const rotateX = Math.max(-maxRotation, Math.min(maxRotation, rawRotateX));

            eyesContainerRef.current.style.transform =
                `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            const maxTravel = 20;
            const tx = (rotateY / maxRotation) * maxTravel;
            const ty = -(rotateX / maxRotation) * maxTravel;

            const eyes = eyesContainerRef.current.querySelectorAll<HTMLElement>(`.${styles.eye}`);
            eyes.forEach((eye) => {
                eye.style.transform = `translateZ(10px) translate(${tx}px, ${ty}px)`;
            });
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const blink = () => {
            const eyes = eyesContainerRef.current?.querySelectorAll<HTMLElement>(`.${styles.eye}`);
            if (!eyes) return;

            eyes.forEach((eye) => {
                eye.classList.add(styles.blink);
                eye.addEventListener("animationend", () => {
                    eye.classList.remove(styles.blink);
                }, { once: true });
            });

            setTimeout(blink, 2000 + Math.random() * 1000);
        };

        const timeout = setTimeout(blink, 2000 + Math.random() * 1000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.character}>
                    <div className={styles.eyes} ref={eyesContainerRef}>
                        <div className={styles.eye}></div>
                        <div className={styles.eye}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
