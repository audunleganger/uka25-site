import { useState, useEffect } from "react";
import HeaderContent from "./HeaderContent";
import "./MobileHeader.css";
const DesktopHeader: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    useEffect(() => {
        console.log("Rendering mobile header");
    });

    const handleBurgerMenuClick = (): void => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <button
                className={`burger-menu ${mobileMenuOpen ? "open" : "closed"}`}
                onClick={handleBurgerMenuClick}
            ></button>
            <div
                className={`header mobile-header ${
                    mobileMenuOpen ? "open" : "closed"
                }`}
            >
                <HeaderContent />
            </div>
        </>
    );
};

export default DesktopHeader;
