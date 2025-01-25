import Footer from "../components/Footer";
import Header from "../components/Header";
import "./RevyPage.css";
import AnnikaHeadshot from "/src/assets/actor-images/annika-headshot.jpg";
import AndreHeadshot from "/src/assets/actor-images/andre-headshot.jpg";
import GuroHeadshot from "/src/assets/actor-images/guro-headshot.jpg";
import JulieHeadshot from "/src/assets/actor-images/julie-headshot.jpg";
import WilliamHeadshot from "/src/assets/actor-images/william-headshot.jpg";
import vetleImagePath from "/src/assets/board-images/vetle-avatar.jpg";

interface InterviewData {
    name: string;
    age: string;
    study: string;
    experience: string;
    threeWords: string;
    mostHyped: string;
    yourLimit: string;
    viewReason: string;
    headShot: string;
}

const interviews: InterviewData[] = [
    {
        name: "Annika Synnes",
        age: "22",
        study: "Einedomsmegling, juss og økonomi",
        experience: "Snilerevyen 2020 og 2022",
        threeWords: "Blakk, svak og forelska",
        mostHyped: "Pils",
        yourLimit: "Sone 2Ø",
        viewReason: "Hvorfor ikke?",
        headShot: AnnikaHeadshot,
    },
    {
        name: "André Fresvik",
        age: "23",
        study: "Lyd og Musikkproduksjon",
        experience: "Halvveis",
        threeWords: "Ambisiøs, Åpensinnet, GummiTarzan",
        mostHyped:
            "Gleder meg til å høre hva gamle revyskuespillere synes om revyen",
        yourLimit: "Ingen kommentar.",
        viewReason: "Fordi da har du noe å snakke om i hele 2025.",
        headShot: AndreHeadshot,
    },
    {
        name: "Guro Torp Nielsen",
        age: "21",
        study: "Kultur og kommunikasjon",
        experience:
            "Har en ungdomsskolerevy og et par musikaler på baken om det trengs?",
        threeWords: "Vims, stressa, optimistisk",
        mostHyped: "Å se griserevy! Og øl til funksjonærpris ;)",
        yourLimit: "Grensa er vel egentlig nådd nå. Med denne revyen.",
        viewReason:
            "Det blir masse blackmail-materiale å hente på skuespillerne!",
        headShot: GuroHeadshot,
    },
    {
        name: "Julie Yan Steinhaug",
        age: "19",
        study: "Pedagogikk",
        experience:
            "Jeg var med i russerevyen som skuespiller på videregående.",
        threeWords: "Snill, utadvent og stressa",
        mostHyped: "Jeg gleder meg til å oppleve UKA og se griserevyen.",
        yourLimit: "Jeg tror den går fra Stortorvet?",
        viewReason: "Fordi det kommer til å bli grensesprengende... :)",
        headShot: JulieHeadshot,
    },
    {
        name: "William August Dalstø",
        age: "25",
        study: "Design",
        experience: "Nei",
        threeWords: "Morsom, morsom, sykt ydmyk 🫶🤓",
        mostHyped:
            "Griserevyen for da slipper jeg å stå på scenen - neida, men blir nok veldig gøy.",
        yourLimit:
            "9/11 jokes, der går grensa. Vi mistet jo tross alt noen av våre modigste og dyktigste piloter den dagen.",
        viewReason:
            "Hvordan skal jeg kunne flørte med alle de eksterne om ingen kommer??",
        headShot: WilliamHeadshot,
    },
];

const RevyPage = () => {
    return (
        <>
            <Header />
            <section className="statement-wrapper">
                <h1>Hilsen fra Revysjefen</h1>
                <img className="statement-photo" src={vetleImagePath} />
                <h2>Kjære publikum,</h2>

                <p>
                    Det har vært en spennende, til tider svært krevende, men
                    mest av alt en utrolig morsom prosess med å sette opp årets
                    revy. Etter to lange år med venting er det nå endelig duket
                    for revy på Blindern Studenterhjem igjen, og det er min
                    glede å ønske velkommen til den 43. jubileumsrevyen “Når er
                    grensa nådd?”.
                </p>

                <p>
                    Våre fem fantastiske skuespillere har virkelig fått testet
                    sine grenser, både fysisk og mentalt i oppkjøringsperioden.
                    Det har vært utrolig lange dager den siste tiden, fylt med
                    latter, sang, koreografi, dårlig og god stemning. Håper vi
                    fortsatt kan være venner etter at jeg har tatt fra dere all
                    fritid den siste måneden.
                </p>

                <p>
                    Skrivegruppa, ledet av Helge Svendsen, har stått på hele
                    høsten for å produsere sketsjer og låter som til slutt har
                    blitt resultatet dere nå skal få se. Grenser var et
                    gjengående tema i tidlig idéfaser og endte til slutt opp med
                    å bli temaet for revyen. Sjelden tror jeg forøvrig det har
                    blitt produsert mer materiale enn til årets revy. Kvaliteten
                    får det dog bli opp til hver enkelt å vurdere.
                </p>

                <p>
                    Hele veien har våre fantastiske instruktører Grettir
                    Einarsson og Nickolai Arnesen-Halmrast stått på for at
                    skuespillerne skal få lov til å skinne på scenen. Det er
                    fint å se at de hissige mengdene studiegjeld innenfor
                    skuespillerteknikk ikke har vært helt forgjeves.
                </p>

                <p>
                    Uten musikk ville det ikke blitt noen revy, og vårt utrolig
                    dyktige revyband, ledet av kapellmester Mads Wigestrand,
                    står klare hver kveld for å akkompagnere skuespillerne.
                </p>

                <p>
                    Det er også viktig å nevne dem som ikke står i rampelyset
                    hver kveld, men som vi aldri ville fått til å lage revy
                    uten. En enorm takk til våre helt fantastiske kostyme- og
                    rekvisittgrupper for å jobbe med umenneskelig knappe
                    tidsfrister og for å levere selv de merkeligste bestillinger
                    uten å nøle. Til sminkører, inspisient, assistent og
                    scenearbeidere for å sørge for at sminka sitter perfekt og
                    at alt går knirkefritt både bak og på scenen.
                </p>

                <p>
                    Løp til baren og kjøp en øl eller ti, len deg tilbake og
                    prøv å nyt forestillingen!
                </p>

                <p className="signature">Xoxo</p>
                <p className="signature">Revysjef, UKA på Blindern 2025</p>
                <p className="signature">Vetle Volleng</p>
            </section>
            <section className="actor-interview-section">
                <h1 className="actor-interview-heading">Møt skuespillerne</h1>
                <div className="actor-interview-container">
                    {interviews.map((interview) => {
                        return (
                            <div className="actor-interview-wrapper">
                                <div className="actor-interview">
                                    <p className="interview-question">Navn</p>
                                    <p className="interview-answer">
                                        {interview.name}
                                    </p>
                                    <p className="interview-question">Alder</p>
                                    <p className="interview-answer">
                                        {interview.age}
                                    </p>
                                    <p className="interview-question">Studie</p>
                                    <p className="interview-answer">
                                        {interview.study}
                                    </p>
                                    <p className="interview-question">
                                        Har du tidligere erfaring med revy?
                                    </p>
                                    <p className="interview-answer">
                                        {interview.experience}
                                    </p>
                                    <p className="interview-question">
                                        Beskriv deg selv med tre ord
                                    </p>
                                    <p className="interview-answer">
                                        {interview.threeWords}
                                    </p>
                                    <p className="interview-question">
                                        Hva gleder du deg mest til med UKA
                                        utenom å stå på scenen?
                                    </p>
                                    <p className="interview-answer">
                                        {interview.mostHyped}
                                    </p>
                                    <p className="interview-question">
                                        Når er grensa di nådd?
                                    </p>
                                    <p className="interview-answer">
                                        {interview.yourLimit}
                                    </p>
                                    <p className="interview-question">
                                        Hvorfor skal folk komme å se revyen?
                                    </p>
                                    <p className="interview-answer">
                                        {interview.viewReason}
                                    </p>
                                </div>
                                <img
                                    className="actor-headshot"
                                    src={interview.headShot}
                                    alt="Headshot"
                                />
                            </div>
                        );
                    })}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default RevyPage;
