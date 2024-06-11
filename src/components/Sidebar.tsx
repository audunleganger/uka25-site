import "./Sidebar.css"

type SidebarProps = {
    className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
    return (
        <div className={`${className}`}>
            <button className="sidebar-button">Home</button>
            <button className="sidebar-button">Artist</button>
            <button className="sidebar-button">Program</button>
        </div>
    )
}