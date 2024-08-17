import ProgramEntry from "../components/ProgramEntry";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import imgBarTilBar from "../assets/program-images/utebar.jpg";
import imgBlinderntalenter from "../assets/program-images/blinderntalenter.jpg";
import imgFestival from "../assets/program-images/festivaldag.jpg";
import "./ProgramPage.css";
import { useMultipleIntersectionObservers } from "../hooks/useMultipleIntersectionObservers";
import { useEffect } from "react";

function ProgramPage() {
    const [refs, isIntersecting] = useMultipleIntersectionObservers({
        threshold: 0,
    });

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    return (
        <>
            <Sidebar activePage="program" />
            <h1
                id="19aug"
                className={`date-header ${
                    isIntersecting[0] ? "visible" : "hidden"
                }`}
                ref={(el) => (refs.current[0] = el)}
            >
                <span>Mandag 19. august 2024</span>
            </h1>
            <ProgramEntry
                title="Pub til pub og band-konkurranse"
                imagePath={imgBarTilBar}
            >
                <ul className="program-entry-list">
                    <li>17:00 - Billa og Spektrum bar åpner</li>
                    <li>
                        <strong>19:00 - Battle of the Bands</strong>
                    </li>
                    <li>22:00 - Live-musikk / allsang</li>
                    <li>03:00 - Barene stenger</li>
                </ul>
            </ProgramEntry>
            <h1
                id="20aug"
                className={`date-header ${
                    isIntersecting[1] ? "visible" : "hidden"
                }`}
                ref={(el) => (refs.current[1] = el)}
            >
                <span>Tirsdag 20. august 2024</span>
            </h1>
            <ProgramEntry title="Interndag" imagePath={imgBlinderntalenter}>
                <p>
                    <strong>(Kun for beboere)</strong>
                </p>
                <ul className="program-entry-list">
                    <li>20:00 - Billa bar åpner</li>
                    <li>
                        <strong>20:30 - Blinderntalenter del 1</strong>
                    </li>
                    <li>21:00 - Spektrum og ULKA åpner</li>
                    <li>
                        <strong>21:30 - Blinderntalenter del 2</strong>
                    </li>
                    <li>22:15 - Silje Jensen & Vællentain</li>
                    <li>00:00 - Nachspiel i ULKA</li>
                    <li>03:00 - Barene stenger / lalletid</li>
                </ul>
            </ProgramEntry>
            <h1
                id="21aug"
                className={`date-header ${
                    isIntersecting[2] ? "visible" : "hidden"
                }`}
                ref={(el) => (refs.current[2] = el)}
            >
                <span>Onsdag 21. august 2024</span>
            </h1>
            <ProgramEntry
                title="Festivaldag på Bukkehaugen"
                imagePath={imgFestival}
            >
                <ul className="program-entry-list">
                    <li>12:00 - UKElounge med DJ og hagespill</li>
                    <li>17:00 - Dørene åpner</li>
                    <li>17:15 - Standup med Grettir!</li>
                    <li>
                        19:00 - <strong>Zimmermann, The Mets, 06 Boys</strong>
                    </li>
                    <li>23:00 - BIlla og Spektrum bar åpner</li>
                    <li>00:30 - Nach i ULKA</li>
                    <li>03:00 - Barene stenger</li>
                    <li>03:30 - ULKA-nach?</li>
                </ul>
            </ProgramEntry>
            <Footer />
        </>
    );
}

export default ProgramPage;
