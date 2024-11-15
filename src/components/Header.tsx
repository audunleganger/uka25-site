import { useNavigate } from "react-router-dom";
import "./Header.css";
import logoBlackYellow from "../assets/icons/logo-sort-roed.png";
const Header: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <header>
                <img
                    className="headerLogo"
                    src={logoBlackYellow}
                    alt="UKA-logo"
                    onClick={() => navigate("//")}
                />
                <button
                    className="headerButton"
                    onClick={() => navigate("/program")}
                >
                    Program
                </button>
                <button
                    className="headerButton"
                    onClick={() =>
                        (window.location.href =
                            "https://billett.blindernuka.no/")
                    }
                >
                    Billetter
                </button>
                <button className="headerButton" onClick={() => navigate("")}>
                    Frivillig
                </button>
                <button className="headerButton" onClick={() => navigate("")}>
                    Om UKA
                </button>
                <button
                    className="headerButton"
                    onClick={() => navigate("/contact")}
                >
                    Kontakt
                </button>
            </header>
            <div className="header-placeholder"></div>
        </>
    );
};

export default Header;
