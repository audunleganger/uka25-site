import EventTimeline from "../components/EventTimeline";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProgramPage = () => {
    return (
        <>
            <Header />
            <EventTimeline className="vertical" />
            <Footer />
        </>
    );
};

export default ProgramPage;
