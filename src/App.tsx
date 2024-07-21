import HomePage from "./pages/HomePage";
import ProgramPage from "./pages/ProgramPage";
import ContactPage from "./pages/ContactPage";
import { Route, Routes } from "react-router-dom";
function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/program/" element={<ProgramPage />} />
            <Route path="/contact/" element={<ContactPage />} />
        </Routes>
    );
}

export default App;
