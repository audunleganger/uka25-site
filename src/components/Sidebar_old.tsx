import "./Sidebar.css";
import blindernUkaLogoBlack from "../assets/logo-miniuka-svart.png";

type SidebarProps = {
    className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
    return (
        <div className={`${className}`}>
            <img className="sidebar-logo" src={blindernUkaLogoBlack} />
            <div className="sidebar-button-wrapper">
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
        </div>
    );
}
