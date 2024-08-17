import LandingImage from "../components/LandingImage";
import Sidebar from "../components/Sidebar";
import CountdownTimer from "../components/CountdownTimer";
import ProgramField from "../components/ProgramField";
import Footer from "../components/Footer";
import logoRedBlack from "../assets/icons/logo-sort-roed.png";
import "./HomePage.css";

function HomePage() {
    return (
        <div className="homePage">
            <Sidebar activePage="home" />
            <LandingImage />
            <div className="row">
                <img src={logoRedBlack} alt="UKA-logo" className="logo" />
            </div>
            <CountdownTimer />
            <ProgramField />
            <Footer />
        </div>
    );
}

export default HomePage;
