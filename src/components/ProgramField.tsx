import "./ProgramCard";
import ProgramCard from "./ProgramCard";
import "./ProgramField.css";

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
                    imagePath="/src/assets/billa_bar.jpg"
                    date="Mandag 19. august"
                >
                    Bli med på pub til pub, eller dominer musikalsk på Battle of
                    the Bands.
                </ProgramCard>
                <ProgramCard
                    title="Blinderntalenter"
                    imagePath="/src/assets/blindern_talenter.jpg"
                    date="Tirsdag 20. august"
                >
                    Bli med på interndag, og vis frem dine evner på Blindern
                    Talenter.
                </ProgramCard>
                <ProgramCard
                    title="Festivaldag"
                    imagePath="/src/assets/festivaldag.jpg"
                    date="Onsdag 21. august"
                >
                    Bli med på festivaldag med artister, UKElounge, stand-up og
                    mye mer.
                </ProgramCard>
            </div>
        </section>
    );
}
