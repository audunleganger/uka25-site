import HomePage from "./pages/HomePage";
import ProgramPage from "./pages/ProgramPage";
import ContactPage from "./pages/ContactPage";
import ArtistsPage from "./pages/ArtistsPage";
import { Route, Routes } from "react-router-dom";
import TicketPage from "./pages/TicketPage";
import JanneStatementPage from "./pages/JanneStatementPage";
function App() {
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
