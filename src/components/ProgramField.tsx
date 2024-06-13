import "./ProgramCard";
import "./ProgramField.css";

export default function ProgramField() {
    return (
        <section className="program-wrapper">
            <h1 className="program-header">Program: MiniUKA på Blindern</h1>
            <div className="program-card-wrapper">
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
            </div>
        </section>
    );
}
