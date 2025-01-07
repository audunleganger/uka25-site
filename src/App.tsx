import HomePage from "./pages/HomePage";
import ProgramPage from "./pages/ProgramPage";
import ContactPage from "./pages/ContactPage";
import ArtistsPage from "./pages/ArtistsPage";
import { Route, Routes } from "react-router-dom";
import TicketPage from "./pages/TicketPage";
function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/miniuka/program/" element={<ProgramPage />} />
            <Route path="/program/" element={<ProgramPage />} />
            <Route path="/contact/" element={<ContactPage />} />
            <Route path="miniuka/artists/" element={<ArtistsPage />} />
            <Route path="/tickets/" element={<TicketPage />} />
        </Routes>
    );
}

export default App;
