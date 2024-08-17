import HomePage from "./pages/HomePage";
import ProgramPage from "./pages/ProgramPage";
import ContactPage from "./pages/ContactPage";
import ArtistsPage from "./pages/ArtistsPage";
import { Route, Routes } from "react-router-dom";
function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/miniuka/program/" element={<ProgramPage />} />
            <Route path="/contact/" element={<ContactPage />} />
            <Route path="miniuka/artists/" element={<ArtistsPage />} />
        </Routes>
    );
}

export default App;
