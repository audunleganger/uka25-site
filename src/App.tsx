import HomePage from "./pages/HomePage";
import ProgramPage from "./pages/ProgramPage";
import ContactPage from "./pages/ContactPage";
import ArtistsPage from "./pages/ArtistsPage";
import { Route, Routes } from "react-router-dom";
import TicketPage from "./pages/TicketPage";
import JanneStatementPage from "./pages/JanneStatementPage";
import { usePage } from "./context/PageContext";
import { useLocation } from "react-router-dom";
import preloadImages from "./utils/preloadImages";
import { useEffect } from "react";

import janneImagePath from "./assets/board-images/janne-avatar.jpg";
import jennyImagePath from "./assets/board-images/jenny-avatar.jpg";
import anneImagePath from "./assets/board-images/anne-marie-avatar.jpg";
import sofieImagePath from "./assets/board-images/sofie-avatar.jpg";
import haavardImagePath from "./assets/board-images/haavard-avatar.jpg";
import haakonImagePath from "./assets/board-images/haakon-avatar.jpg";
import vetleImagePath from "./assets/board-images/vetle-avatar.jpg";
import henrikImagePath from "./assets/board-images/henrik-avatar.jpg";

function App() {
    const location = useLocation();
    const { setCurrentPage } = usePage();

    useEffect(() => {
        const path = location.pathname;
        console.log(path);
        if (path === "/") {
            setCurrentPage("home");
        } else if (path === "/program") {
            setCurrentPage("program");
        } else if (path === "/contact") {
            setCurrentPage("contact");
        } else if (path === "/miniuka/artists") {
            setCurrentPage("artists");
        } else if (path === "/tickets") {
            setCurrentPage("tickets");
        } else if (path === "/janne-statement") {
            setCurrentPage("janne-statement");
        }
    }, [location, setCurrentPage]);

    useEffect(() => {
        preloadImages([
            janneImagePath,
            jennyImagePath,
            anneImagePath,
            sofieImagePath,
            haavardImagePath,
            haakonImagePath,
            vetleImagePath,
            henrikImagePath,
        ]);
    }, []);
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/miniuka/program/" element={<ProgramPage />} />
            <Route path="/program/" element={<ProgramPage />} />
            <Route path="/contact/" element={<ContactPage />} />
            <Route path="miniuka/artists/" element={<ArtistsPage />} />
            <Route path="/tickets/" element={<TicketPage />} />
            <Route path="/janne-statement/" element={<JanneStatementPage />} />
        </Routes>
    );
}

export default App;
