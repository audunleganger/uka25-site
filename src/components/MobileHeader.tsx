import { useEffect } from "react";
import HeaderContent from "./HeaderContent";
import "./MobileHeader.css";
const DesktopHeader: React.FC = () => {
    useEffect(() => {
        console.log("Rendering mobile header");
    });
    return (
        <>
            <div className="header mobile-header">
                <HeaderContent />
            </div>
        </>
    );
};

export default DesktopHeader;
