import "./Sidebar.css";

type SidebarProps = {
    className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
    return (
        <div className={`${className}`}>
            <button className="sidebar-button">
                Hjem <br />
                (uferdig)
            </button>
            <button className="sidebar-button">
                Artister <br />
                (uferdig)
            </button>
            <button className="sidebar-button">
                Program <br />
                (uferdig)
            </button>
        </div>
    );
}
