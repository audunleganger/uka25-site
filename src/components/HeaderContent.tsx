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
                className="headerButton"
                disabled={false}
                onClick={() => navigate("/program")}
            >
                Program
            </button>
            <button
                className="headerButton"
                disabled={false}
                onClick={() =>
                    window.open("https://billett.blindernuka.no/eventgroup/10")
                }
            >
                Billetter
            </button>
            <button
                className="headerButton disabled"
                disabled={true}
                onClick={() => navigate("")}
            >
                Hilsen fra UKEsjefen
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
