import LandingImage from "../../components/LandingImage";
import Header from "../../components/Header";
import CountdownTimer from "../../components/CountdownTimer";
import ProgramField from "../../components/ProgramField";

function HomePage() {
    return (
        <>
            <Header />
            <LandingImage />
            <CountdownTimer />
            <ProgramField />
        </>
    );
}

export default HomePage;
