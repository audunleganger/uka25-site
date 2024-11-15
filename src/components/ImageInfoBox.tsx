import React, { ReactNode } from "react";
import "./ImageInfoBox.css";

interface ImageInfoBoxProps {
    imagePath: string;
    children: ReactNode;
}

const validateChildren = (children: ReactNode) => {
    return React.Children.map(children, (child) => {
        if (
            React.isValidElement(child) &&
            (child.type === "h1" || child.type === "p")
        ) {
            return child;
        }
        return null;
    });
};

const ImageInfoBox: React.FC<ImageInfoBoxProps> = ({ imagePath, children }) => {
    const validChildren = validateChildren(children);

    return (
        <div className="imageInfoBox">
            <div className="textWrapper">{validChildren}</div>
            <div className="imageWrapper">
                <img src={imagePath} />
            </div>
        </div>
    );
};

export default ImageInfoBox;
