import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Header.css";
import Sidebar from "./Sidebar";

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleBurgerClick = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="header-wrapper">
            <div className="burger-wrapper" onClick={handleBurgerClick}>
                <FiMenu className="burger" />
            </div>
            <Sidebar
                className={
                    sidebarOpen
                        ? "sidebar sidebar-enabled"
                        : "sidebar sidebar-disabled"
                }
            />
            <div
                className={
                    sidebarOpen
                        ? "overlay overlay-enabled"
                        : "overlay overlay-disabled"
                }
            ></div>
        </div>
    );
}
