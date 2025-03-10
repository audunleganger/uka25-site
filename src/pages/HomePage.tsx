// import CountdownTimer from "../components/CountdownTimer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./HomePage.css";
import mainLogo from "../assets/icons/logo-sort-roed.png";
import concertImage from "../assets/misc/konsert-spektrum.jpg";
import ImageInfoBox from "../components/ImageInfoBox";
import EventTimeline from "../components/EventTimeline";
import SignTree from "../components/SignTree/SignTree";

function HomePage() {
    return (
        <div className="homePage">
            <Header />
            <img src={mainLogo} alt="logo" className="mainLogo" />
            <EventTimeline />
            <div className="tree-spotify-wrapper">
                <SignTree />
                <iframe
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/track/6OYiSPPIa0zkk14irHrJsv?utm_source=generator"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>
            <ImageInfoBox imagePath={concertImage}>
                <h1>UKA på Blindern</h1>
                <p>
                    UKA på Blindern 2025 byr på masse spennende konserter og
                    arrangementer. Sjekk ut programmet vårt, og bli med på
                    Norges feteste hjemme-alene-fest!
                </p>
            </ImageInfoBox>
            <Footer />
        </div>
    );
}

export default HomePage;
