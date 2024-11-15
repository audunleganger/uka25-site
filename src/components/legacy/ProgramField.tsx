import "./ProgramCard";
import ProgramCard from "./ProgramCard";
import "./ProgramField.css";
import billaBarImage from "../assets/billa_bar.jpg";
import blindernTalenterImage from "../assets/blindern_talenter.jpg";
import festivaldagImage from "../assets/festivaldag.jpg";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useEffect } from "react";

export default function ProgramField() {
    const [ref, isIntersecting] = useIntersectionObserver({
        threshold: 0,
    });
    useEffect(() => {
        if (ref.current) {
            if (isIntersecting) {
                ref.current.classList.add("visible");
                ref.current.classList.remove("hidden");
            } else {
                ref.current.classList.add("hidden");
                ref.current.classList.remove("visible");
            }
        }
    });
    return (
        <section className="program-wrapper hidden" ref={ref}>
            <h1 className="program-header">Program</h1>
            <div className="program-card-wrapper">
                <ProgramCard
                    title="Pub til pub & Battle of the Bands"
                    imagePath={billaBarImage}
                    date="Mandag 19. august"
                    hashId="19aug"
                >
                    Bli med på pub til pub, eller dominer musikalsk på Battle of
                    the Bands.
                </ProgramCard>
                <ProgramCard
                    title="Blinderntalenter"
                    imagePath={blindernTalenterImage}
                    date="Tirsdag 20. august"
                    hashId="20aug"
                >
                    Bli med på interndag, og vis frem dine evner på Blindern
                    Talenter.
                </ProgramCard>
                <ProgramCard
                    title="Festivaldag"
                    imagePath={festivaldagImage}
                    date="Onsdag 21. august"
                    hashId="21aug"
                >
                    Bli med på festivaldag med artister, UKElounge, stand-up og
                    mye mer.
                </ProgramCard>
            </div>
        </section>
    );
}
