import "./Sidebar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import burgerIcon from "../assets/icons/burger.png";
import miniUkaLogo from "../assets/logo-miniuka-svart.png";

interface SidebarProps {
    activePage: string;
}

export default function Sidebar({ activePage }: SidebarProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    function handleBurgerClick() {
        setMenuOpen(!menuOpen);
    }

    function activeClassname(pageName: String) {
        return activePage !== pageName ? "active" : "disabled";
    }

    function handleSidebarButtonClick(url: string) {
        navigate(url);
        window.scrollTo(0, 0);
    }

    return (
        <div className="Sidebar">
            <button
                className={`burger-menu ${menuOpen ? "open" : "closed"}`}
                onClick={handleBurgerClick}
            >
                <img src={burgerIcon} alt="burger" />
            </button>
            <div className={`sidebar-wrapper ${menuOpen ? "open" : "closed"}`}>
                <img className="miniuka-logo" src={miniUkaLogo} />
                <button
                    className={`sidebar-button ${activeClassname("home")}`}
                    onClick={() => handleSidebarButtonClick("//")}
                >
                    Hjem
                </button>
                <button
                    className={`sidebar-button ${activeClassname("program")}`}
                    onClick={() => handleSidebarButtonClick("/program/")}
                >
                    Program
                </button>
                <button
                    className={`sidebar-button ${activeClassname("contact")}`}
                    onClick={() => handleSidebarButtonClick("/contact/")}
                >
                    Kontakt
                </button>
            </div>
        </div>
    );
}
