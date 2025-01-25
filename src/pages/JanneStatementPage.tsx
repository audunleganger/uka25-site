import "./statement-style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JannePicture from "../assets/board-images/janne-avatar.jpg";
const JanneStatementPage = () => {
    return (
        <div className="janne-statement-page">
            <Header />
            <div className="statement-wrapper">
                <h1>Hilsen fra UKEsjefen </h1>
                <img
                    className="statement-photo"
                    src={JannePicture}
                    alt="UKEsjefen Janne Dahl Dimitrova"
                />
                <h2>Hjertelig velkommen til UKA på Blindern 2025! </h2>
                <p>
                    Det er med stor glede vi nok en gang åpner hjemmet vårt til
                    Norges største hjemme-alene- fest, nemlig UKA på Blindern
                    2025. I to uker skal vi danse, synge, le og feste.
                    Festivalen er basert på frivillig arbeid og er et stort
                    samarbeidsprosjekt blant Blindern-beboerne. Vi er alle
                    stolte av å ønske dere velkommen til UKA på Blindern 2025!
                </p>
                <p>
                    Hjertet til UKA på Blindern er som alltid Blindernrevyen.
                    Den 43. jubileumsrevyen har fått navnet “Når er grensa
                    nådd?”. Skuespillerne danser, synger, gnikker og kliner med
                    grensa gjennom den grenseløst morsomme forestillingen. Er
                    det noen som vet hvor grensa i det hele tatt går, hvordan
                    vet vi at den er nådd? Vi balanserer forsiktig på de mange
                    grensene vi har her i livet, og håper vi til slutt finner ut
                    av det.
                </p>
                <p>
                    Festival er ikke bare konsert og forestillinger, dette er et
                    kjempestort felles prosjekt hvor alle Blindernbeboerne
                    bidrar på sin måte. Man merker UKEånden spre seg i gangene,
                    og det er vilt å se hvilket engasjement, fellesskap og
                    samhold dette har skapt på Bruket. Som UKEsjef må jeg
                    innrømme at det er det som gjør meg mest stolt. Det er
                    utrolig hva vi får til her på lille Blindern.
                </p>
                <p>
                    Gjennom 11 dager kan du oppleve konserter, revy,
                    live-podcast og den unike Blindernstemningen. Som om det
                    ikke var nok har vi hele seks barer åpne i denne perioden,
                    hvor “Gangbar” er det nyeste tilskuddet. Når trafikklyset
                    lyser grønt, anbefaler vi alle å stille opp i gangen mellom
                    Billa bar og ULKA. Vi gleder oss til å invitere alle
                    Oslostudenter inn i varmen!
                </p>
                <p>
                    Tusen takk til alle som har bidratt til at vi kan sette opp
                    revy og festival igjen her på Blindern. Takk for at dere har
                    bidratt med kunnskap, erfaring og Blindernånd. Så legg fra
                    dere pensumbøkene og nyt UKA på Blindern 2025, dette blir
                    helt grensesprengende bra.
                </p>
                <p>
                    Vi danses, synges og festes, og husk: Borte Bra, Blindern
                    best.
                </p>
                <p className="signature">Stor UKEhilsen fra</p>
                <p className="signature">Janne Dahl</p>
                <p className="signature">UKEsjef</p>
            </div>
            <Footer />
        </div>
    );
};

export default JanneStatementPage;
