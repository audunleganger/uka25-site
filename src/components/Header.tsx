import "./Header.css";
import logoBlackYellow from "../assets/icons/logo-sort-roed.png";
const Header = () => {
    return (
        <header>
            <img className="headerLogo" src={logoBlackYellow} alt="UKA-logo" />
            <button className="headerButton">Program</button>
            <button className="headerButton">Billetter</button>
            <button className="headerButton">Frivillig</button>
            <button className="headerButton">Om UKA</button>
            <button className="headerButton">Kontakt</button>
        </header>
    );
};

export default Header;
