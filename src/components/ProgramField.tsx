import "./ProgramCard";
import ProgramCard from "./ProgramCard";
import "./ProgramField.css";
import billaBarImage from "../assets/billa_bar.jpg";
import blindernTalenterImage from "../assets/blindern_talenter.jpg";
import festivaldagImage from "../assets/festivaldag.jpg";

export default function ProgramField() {
    return (
        <section className="program-wrapper">
            <h1 className="program-header">Program: MiniUKA på Blindern</h1>
            {/*<div className="program-card-wrapper">
                <div className="program-entry">
                    <h3>Mandag 19. august</h3>
                    <p>Pub til pub og Battle of the Bands</p>
                </div>
                <div className="program-entry">
                    <h3>Tirsdag 20. august</h3>
                    <p>Interndag med Blinderntalenter</p>
                </div>
                <div className="program-entry">
                    <h3>Onsdag 21. august</h3>
                    <p>
                        Festivaldag med artister, UKElounge, stand-up og mye mer
                    </p>
                </div>
            </div> */}
            <div className="program-card-wrapper">
                <ProgramCard
                    title="Pub til pub & Battle of the Bands"
                    imagePath={billaBarImage}
                    date="Mandag 19. august"
                >
                    Bli med på pub til pub, eller dominer musikalsk på Battle of
                    the Bands.
                </ProgramCard>
                <ProgramCard
                    title="Blinderntalenter"
                    imagePath={blindernTalenterImage}
                    date="Tirsdag 20. august"
                >
                    Bli med på interndag, og vis frem dine evner på Blindern
                    Talenter.
                </ProgramCard>
                <ProgramCard
                    title="Festivaldag"
                    imagePath={festivaldagImage}
                    date="Onsdag 21. august"
                >
                    Bli med på festivaldag med artister, UKElounge, stand-up og
                    mye mer.
                </ProgramCard>
            </div>
        </section>
    );
}
