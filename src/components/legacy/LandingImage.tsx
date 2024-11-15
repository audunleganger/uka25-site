import { useState, useEffect } from "react";
import "./LandingImage.css";
import logoUkaGul from "../assets/icons/logo-uka-gul.png";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import img1 from "../assets/header-images/uka_blindern_isak.jpg";
import img2 from "../assets/header-images/konsert-larslillo.jpg";
import img3 from "../assets/header-images/konsert-spektrum.jpg";
import img4 from "../assets/header-images/jente-dans.jpg";

export default function LandingImage() {
    const images = [img1, img2, img3, img4];
    const [curImageIndex, setCurImageIndex] = useState(
        Math.floor(Math.random() * images.length)
    );

    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`landing-image-container ${
                isIntersecting ? "visible" : "hidden"
            }`}
            ref={ref as React.MutableRefObject<HTMLDivElement | null>}
        >
            {images.map((imageUrl: string, index: number) => (
                <div
                    key={index}
                    className="image-wrapper"
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                        opacity: curImageIndex === index ? 1 : 0,
                    }}
                ></div>
            ))}
            <img
                src={logoUkaGul}
                alt="UKA-logo"
                className="landing-logo-image"
            />
        </div>
    );
}
