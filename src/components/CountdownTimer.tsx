import "./CountdownTimer.css";

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

        return `${days} dager, ${hours} t, ${minutes} m, ${seconds}s`;
    };

    // Set the final time for the countdown timer to monday 19. august 2024 at 00:00:00
    const endDateTime = new Date("2024-08-19T12:00:00Z");
    const [timeLeftString, setTimeLeftString] = useState(
        createTimeLeftString()
    );

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
        <div className="countdown-wrapper">
            <h1 className="countdown-timer-header">
                Tid igjen før MiniUKA 2025
            </h1>
            <div className="timer-field">
                <div className="timer-text">{`${timeLeftString}`}</div>
            </div>
        </div>
    );
}
