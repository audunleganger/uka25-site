import ProgramEntry from "../components/ProgramEntry";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import imgUkaInstruments from "../assets/program-images/uka-instruments.jpg";
import imgBarTilBar from "../assets/program-images/utebar.jpg";
import imgBlinderntalenter from "../assets/program-images/blinderntalenter.jpg";
import imgFestival from "../assets/program-images/festivaldag.jpg";
import "./ProgramPage.css";

function ProgramPage() {
    return (
        <>
            <Sidebar activePage="program" />
            <h1 className="date-header">Mandag 19. august 2024</h1>
            <ProgramEntry title="Bar til bar" imagePath={imgBarTilBar}>
                Bli med på bar til bar!
            </ProgramEntry>
            <ProgramEntry
                title="Battle of the Bands"
                imagePath={imgUkaInstruments}
            >
                Bli med på Battle of the Bands!
            </ProgramEntry>
            <h1 className="date-header">Tirsdag 20. august 2024</h1>
            <ProgramEntry
                title="Blinderntalenter"
                imagePath={imgBlinderntalenter}
            >
                Vis frem dine skjulte evner på Blinderntalenter!
            </ProgramEntry>
            <h1 className="date-header">Onsdag 21. august 2024</h1>
            <ProgramEntry title="Festivaldag" imagePath={imgFestival}>
                Bli med på festivaldag!
            </ProgramEntry>
            <Footer />
        </>
    );
}

export default ProgramPage;
