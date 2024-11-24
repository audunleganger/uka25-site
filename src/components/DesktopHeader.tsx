import "./DesktopHeader.css";
import HeaderContent from "./HeaderContent";
const DesktopHeader: React.FC = () => {
    return (
        <>
            <div className="header desktop-header">
                <HeaderContent />
            </div>
            <div className="header-placeholder"></div>
        </>
    );
};

export default DesktopHeader;
