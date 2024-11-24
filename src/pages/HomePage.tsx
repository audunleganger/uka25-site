import CountdownTimer from "../components/CountdownTimer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./HomePage.css";
import mainLogo from "../assets/icons/logo-uka-gul.png";
import concertImage from "../assets/misc/konsert-spektrum.jpg";
import ImageInfoBox from "../components/ImageInfoBox";
// import EventTimeline from "../components/EventTimeline";

function HomePage() {
    return (
        <div className="homePage">
            <Header />
            <CountdownTimer />
            <img src={mainLogo} alt="logo" className="mainLogo" />
            <ImageInfoBox imagePath={concertImage}>
                <h1>Uka på Blindern</h1>
                <p>Kom innom under uka på Blindern!</p>
            </ImageInfoBox>
            {/* <EventTimeline /> */}
            <Footer />
        </div>
    );
}

export default HomePage;
