import { useNavigate } from "react-router-dom";
import logoBlackYellow from "../assets/icons/logo-sort-roed.png";
const HeaderContent = () => {
    const navigate = useNavigate();
    return (
        <>
            <img
                className="headerLogo"
                src={logoBlackYellow}
                alt="UKA-logo"
                onClick={() => navigate("/")}
            />
            <button
                className="headerButton disabled"
                disabled={true}
                onClick={() => navigate("/program")}
            >
                Program
            </button>
            <button
                className="headerButton"
                disabled={false}
                onClick={() => navigate("/tickets")}
            >
                Billetter
            </button>
            <button
                className="headerButton disabled"
                disabled={true}
                onClick={() => navigate("")}
            >
                Frivillig
            </button>
            <button
                className="headerButton disabled"
                disabled={true}
                onClick={() => navigate("")}
            >
                Om UKA
            </button>
            <button
                className="headerButton"
                disabled={false}
                onClick={() => navigate("/contact")}
            >
                Kontakt
            </button>
        </>
    );
};
export default HeaderContent;
