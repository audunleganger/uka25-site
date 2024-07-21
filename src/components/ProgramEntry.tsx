import "./ProgramEntry.css";

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
    return (
        <div className="ProgramEntry">
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
