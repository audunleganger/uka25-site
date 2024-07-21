import LandingImage from "../components/LandingImage";
import Sidebar from "../components/Sidebar";
import CountdownTimer from "../components/CountdownTimer";
import ProgramField from "../components/ProgramField";
import Footer from "../components/Footer";

function HomePage() {
    return (
        <>
            <Sidebar activePage="home" />
            <LandingImage />
            <CountdownTimer />
            <ProgramField />
            <Footer />
        </>
    );
}

export default HomePage;
