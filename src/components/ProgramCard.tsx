import "./ProgramCard.css";

interface ProgramCardProps {
    title: string;
    date: string;
    imagePath: string;
    children: React.ReactNode;
}

export default function ProgramCard({
    title,
    date,
    imagePath,
    children,
}: ProgramCardProps) {
    return (
        <div
            className="program-card"
            style={{ backgroundImage: `url(${imagePath})` }}
        >
            <h1 className="program-card-date">{date}</h1>
            <h1 className="program-card-title">{title}</h1>
            <p className="program-card-text">{children}</p>
        </div>
    );
}
