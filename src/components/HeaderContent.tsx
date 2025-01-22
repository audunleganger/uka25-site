import { useNavigate } from "react-router-dom";
import logoBlackYellow from "../assets/icons/logo-sort-roed.png";
import { usePage } from "../context/PageContext";

const buttonsData = {
    Program: "program",
    Billetter: "https://billett.blindernuka.no/eventgroup/10",
    "Hilsen fra UKEsjefen": "janne-statement",
    Kontakt: "contact",
};
const HeaderContent = () => {
    const navigate = useNavigate();
    const { currentPage } = usePage();

    return (
        <>
            <img
                className="headerLogo"
                src={logoBlackYellow}
                alt="UKA-logo"
                onClick={() => navigate("/")}
            />
            {Object.entries(buttonsData).map(([text, link]) => (
                <button
                    key={text}
                    className={`headerButton ${
                        currentPage === link ? "current" : ""
                    }`}
                    disabled={currentPage === link}
                    onClick={() => {
                        if (link.startsWith("http")) {
                            window.open(link, "_blank");
                        } else {
                            navigate(`/${link}`);
                        }
                    }}
                >
                    {text}
                </button>
            ))}
            ;
            {/* <button
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
                className="headerButton"
                disabled={false}
                onClick={() => navigate("/janne-statement")}
            >
                Hilsen fra UKEsjefen
            </button>
            <button
                className="headerButton"
                disabled={false}
                onClick={() => navigate("/contact")}
            >
                Kontakt
            </button> */}
        </>
    );
};
export default HeaderContent;
