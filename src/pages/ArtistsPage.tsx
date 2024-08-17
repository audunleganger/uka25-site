import "./ArtistPage.css";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ArtistsGrid from "../components/ArtitsGrid";
// import { useMultipleIntersectionObservers } from "../hooks/useMultipleIntersectionObservers";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

function ArtistsPage() {
    const [ref1, isIntersecting1] = useIntersectionObserver({
        threshold: 0,
    }) as [React.MutableRefObject<HTMLDivElement | null>, boolean];
    const [ref2, isIntersecting2] = useIntersectionObserver({
        threshold: 0,
    }) as [React.MutableRefObject<HTMLDivElement | null>, boolean];
    return (
        <>
            <Sidebar activePage="artists" />
            <div
                className={`page-title-container ${
                    isIntersecting1 ? "visible" : "hidden"
                }`}
                ref={ref1}
            >
                <h1 className="page-title">Artister</h1>
            </div>
            <div
                className={`${isIntersecting2 ? "visible" : "hidden"}`}
                ref={ref2}
            >
                <ArtistsGrid />
            </div>
            <Footer />
        </>
    );
}

export default ArtistsPage;
