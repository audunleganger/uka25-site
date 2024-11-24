import { useState, useEffect } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { getCssVariable } from "../utils/getCssVariable";
import "./Header.css";

const Header: React.FC = () => {
    const mobileScreenWidth = parseInt(
        getCssVariable("--header-width-threshold"),
        10
    );
    const [isMobile, setIsMobile] = useState<boolean>(
        window.innerWidth < mobileScreenWidth
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < mobileScreenWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [mobileScreenWidth]);

    return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;
