import "./ProgramEntry.css";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { MutableRefObject } from "react";

interface ProgramEntryProps {
    title: string;
    imagePath?: string;
    children?: React.ReactNode;
}

export default function ProgramEntry({
    title,
    imagePath,
    children,
}: ProgramEntryProps) {
    const [ref, isIntersecting] = useIntersectionObserver({
        threshold: 0,
    });
    return (
        <div
            className={`ProgramEntry ${isIntersecting ? "visible" : "hidden"}`}
            ref={ref as MutableRefObject<HTMLDivElement | null>}
        >
            <div className="program-entry-text-wrapper">
                <h2 className="program-entry-title">{title}</h2>
                <p className="program-entry-description">{children}</p>
            </div>
            {imagePath && (
                <img className="program-entry-image" src={imagePath} />
            )}
        </div>
    );
}
