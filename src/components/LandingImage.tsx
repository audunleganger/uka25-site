import { useState, useEffect } from "react";
import "./LandingImage.css";
import logoMiniukaGul from "../assets/logo-miniuka-gul.png";
import img1 from "../assets/header-images/uka_blindern_isak.jpg";
import img2 from "../assets/header-images/konsert-larslillo.jpg";
import img3 from "../assets/header-images/konsert-spektrum.jpg";

export default function LandingImage() {
    const [curImageIndex, setCurImageIndex] = useState(0);
    const images = [img1, img2, img3];

    useEffect(() => {
        // On mount convert imported modules to an array of image URLs

        const interval = setInterval(() => {
            setCurImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="landing-image-container">
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
            <img src={logoMiniukaGul} alt="" className="landing-logo-image" />
        </div>
    );
}
