import React from "react";
import "./ProgramCard.css";
import { useNavigate } from "react-router-dom";

interface ProgramCardProps {
    title: string;
    date: string;
    imagePath: string;
    hashId: string;
    children: React.ReactNode;
}

export default function ProgramCard({
    title,
    date,
    imagePath,
    children,
    hashId,
}: ProgramCardProps) {
    const navigate = useNavigate();
    return (
        <div
            className="program-card"
            style={
                {
                    "--background-image": `url(${imagePath})`,
                } as React.CSSProperties
            }
            onClick={() => {
                navigate(`/miniuka/program#${hashId}`);
            }}
        >
            <h1 className="program-card-date">{date}</h1>
            <h1 className="program-card-title">{title}</h1>
            <div className="program-card-text-wrapper">
                <p className="program-card-text">{children}</p>
            </div>
        </div>
    );
}
