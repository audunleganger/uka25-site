import LandingImage from "../../components/LandingImage";
import Header from "../../components/Header";
import CountdownTimer from "../../components/CountdownTimer";
import ProgramField from "../../components/ProgramField";
import Footer from "../../components/Footer";

function HomePage() {
    return (
        <>
            <Header />
            <LandingImage />
            <CountdownTimer />
            <ProgramField />
            <Footer />
        </>
    );
}

export default HomePage;
