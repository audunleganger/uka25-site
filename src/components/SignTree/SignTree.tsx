import SignTreePath from "/src/assets/misc/signs_transparent.png";
import "./SignTree.css";
import { useState, useRef, useEffect } from "react";
import React from "react";
const SignTree = () => {
    const [aspectRatio, setAspectRatio] = useState(0);
    const imgRef = useRef<HTMLImageElement>(null);

    const imageWidth: number = 200;
    const baseFontSize: number = imageWidth / 8;

    const signTreeItems = [
        {
            text: "Revy",
            fontSizeMultiplier: 1,
            split: false,
            url: "https://billett.blindernuka.no/eventgroup/10",
        },
        {
            text: "Amish Plow",
            fontSizeMultiplier: 0.7,
            split: false,
            url: "https://billett.blindernuka.no/event/317",
        },
        {
            text: "Cinnamon Girls",
            fontSizeMultiplier: 0.7,
            split: false,
            url: "https://billett.blindernuka.no/event/321",
        },
        {
            text: "Swada",
            fontSizeMultiplier: 0.6,
            split: false,
            url: "https://billett.blindernuka.no/event/298",
        },
        {
            text: "Podcast",
            fontSizeMultiplier: 0.55,
            split: false,
            url: "https://billett.blindernuka.no/event/328",
        },
        {
            text: "Jesper Jenset",
            fontSizeMultiplier: 0.7,
            split: false,
            url: "https://billett.blindernuka.no/event/299",
        },
        {
            text: "Gjenfødt Kultur",
            fontSizeMultiplier: 0.55,
            split: true,
            url: "https://billett.blindernuka.no/event/306",
        },
        {
            text: "Simen Steinklev",
            fontSizeMultiplier: 0.6,
            split: false,
            url: "https://billett.blindernuka.no/event/305",
        },
    ];

    useEffect(() => {
        if (imgRef.current) {
            const { naturalWidth, naturalHeight } = imgRef.current;
            setAspectRatio(naturalWidth / naturalHeight);
        }
    }, []);

    const handleMouseEnter = (index: number) => {
        const leftElement = document.querySelector(`.item-${index + 1}-left`);
        const rightElement = document.querySelector(`.item-${index + 1}-right`);
        leftElement?.classList.add("hovered");
        rightElement?.classList.add("hovered");
    };

    const handleMouseLeave = (index: number) => {
        const leftElement = document.querySelector(`.item-${index + 1}-left`);
        const rightElement = document.querySelector(`.item-${index + 1}-right`);
        leftElement?.classList.remove("hovered");
        rightElement?.classList.remove("hovered");
    };
    return (
        <div
            className="sign-tree-wrapper"
            style={{
                width: `${imageWidth}px`,
                height: `${imageWidth * (1 / aspectRatio)}px`,
            }}
        >
            <img
                className="sign-tree-img"
                ref={imgRef}
                src={SignTreePath}
                style={{ width: imageWidth }}
            />
            {signTreeItems.map((item, index) => {
                if (item.split) {
                    return (
                        <React.Fragment key={index}>
                            <div
                                className={`sign-tree-item item-${
                                    index + 1
                                } item-${index + 1}-left`}
                                style={{
                                    fontSize:
                                        baseFontSize * item.fontSizeMultiplier,
                                }}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                                onClick={() => open(item.url)}
                            >
                                {item.text.split(" ")[0]}
                            </div>
                            <div
                                className={`sign-tree-item item-${
                                    index + 1
                                } item-${index + 1}-right`}
                                style={{
                                    fontSize:
                                        baseFontSize * item.fontSizeMultiplier,
                                }}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                                onClick={() => open(item.url)}
                            >
                                {item.text.split(" ")[1]}
                            </div>
                        </React.Fragment>
                    );
                }
                return (
                    <div
                        className={`sign-tree-item item-${index + 1}`}
                        style={{
                            fontSize: baseFontSize * item.fontSizeMultiplier,
                        }}
                        onClick={() => open(item.url)}
                    >
                        {item.text}
                    </div>
                );
            })}

            {/* <div
                className="sign-tree-item item-1"
                style={{ fontSize: baseFontSize }}
            >
                Revy
            </div>
            <div
                className="sign-tree-item item-2"
                style={{ fontSize: baseFontSize * 0.65 }}
            >
                Konsert
            </div>
            <div
                className="sign-tree-item item-3"
                style={{ fontSize: baseFontSize * 0.7 }}
            >
                Amish Plow
            </div>
            <div
                className="sign-tree-item item-4"
                style={{ fontSize: baseFontSize * 0.7 }}
            >
                Cinnamon Girls
            </div>
            <div
                className="sign-tree-item item-5"
                style={{ fontSize: baseFontSize * 0.7 }}
            >
                Podcast
            </div>
            <div
                className="sign-tree-item item-6"
                style={{ fontSize: baseFontSize * 0.7 }}
            >
                Swada
            </div>
            <div
                className="sign-tree-item item-7"
                style={{ fontSize: baseFontSize * 0.7 }}
            >
                Jesper Jenset
            </div>
            <div
                className="sign-tree-item item-8"
                style={{ fontSize: baseFontSize * 0.7 }}
            >
                Simen Steinklev
            </div>
            <div
                className="sign-tree-item item-9 item-9-left"
                style={{ fontSize: baseFontSize * 0.7 }}
            >
                Gjenfødt
            </div>
            <div
                className="sign-tree-item item-9 item-9-right"
                style={{ fontSize: baseFontSize * 0.7 }}
            >
                Kultur
            </div> */}
        </div>
    );
};

export default SignTree;
