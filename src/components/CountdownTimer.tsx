import "./CountdownTimer.css";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

import { useState, useEffect } from "react";

export default function CountdownTimer() {
    // Calculate the time left until the final time
    const getTimeLeftFromNow = () => {
        return endDateTime.getTime() - new Date().getTime();
    };

    const createTimeLeftString = () => {
        const timeLeft = getTimeLeftFromNow();
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        const daysString = days < 10 ? `0${days}` : `${days}`;
        const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
        const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${daysString} ${hoursString} ${minutesString} ${secondsString}`;
    };

    // Set the final time for the countdown timer to monday 19. august 2024 at 00:00:00
    const endDateTime = new Date("2024-08-19T12:00:00Z");
    const [timeLeftString, setTimeLeftString] = useState(
        createTimeLeftString()
    );
    const [ref, isIntersecting] = useIntersectionObserver({
        threshold: 0,
    });

    useEffect(() => {
        if (ref.current) {
            if (isIntersecting) {
                ref.current.classList.add("visible");
                ref.current.classList.remove("hidden");
            } else {
                ref.current.classList.add("hidden");
                ref.current.classList.remove("visible");
            }
        }
    });

    // Use an effect t oupdate the time left every second
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeftString(createTimeLeftString());
        }, 1000);

        // Clear the interval when the component is unmounted
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <section className="countdown-wrapper hidden" ref={ref}>
            <h1 className="countdown-timer-header">
                Nedtelling til MiniUKA på Blindern 2025
            </h1>
            <div className="timer-field">
                <div className="time-unit">
                    <span className="time-value">
                        {timeLeftString.split(" ")[0]}
                    </span>
                    <span className="time-label">Dager</span>
                </div>
                <div className="time-unit">
                    <span className="time-value">
                        {timeLeftString.split(" ")[1]}
                    </span>
                    <span className="time-label">Timer</span>
                </div>
                <div className="time-unit">
                    <span className="time-value">
                        {timeLeftString.split(" ")[2]}
                    </span>
                    <span className="time-label">Minutter</span>
                </div>
                <div className="time-unit">
                    <span className="time-value">
                        {timeLeftString.split(" ")[3]}
                    </span>
                    <span className="time-label">Sekunder</span>
                </div>
            </div>
        </section>
    );
}
