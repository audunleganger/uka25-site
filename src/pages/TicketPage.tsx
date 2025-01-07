import Footer from "../components/Footer";
import Header from "../components/Header";
import placeholderImgPath from "../assets/program-images/placeholder.jpg";
import revyImgPath from "../assets/program-images/revy.jpg";
import "./TicketPage.css";

// interface EventInfo {
//     title: string;
//     time_start: number;
// }
// const TicketItem = ({ id }: { id: string }) => {
// const [eventInfo, setEventInfo] = useState<EventInfo | null>(null);
// const proxyUrl = "https://cors-anywhere.herokuapp.com/";
// const targetUrl = `https://billett.blindernuka.no/api/event/${id}`;
// const fetchEventInfo = async () => {
//     try {
//         const response = await fetch(`${proxyUrl}${targetUrl}`);
//         const data = await response.json();
//         setEventInfo(data);
//     } catch (error) {
//         console.log(`Noe gikk galt: ${error}`);
//     }
// };

// useEffect(() => {
//     fetchEventInfo();
// });

// if (!eventInfo) {
//     return <h1>Loading...</h1>;
// }
//     return <></>;
// };

interface TicketItemProps {
    title: string;
    category: string;
    time: string;
    location: string;
    ticketUrl: string;
    imgPath?: string;
}

const TicketItem = ({
    title,
    // category,
    time,
    location,
    ticketUrl,
    imgPath,
}: TicketItemProps) => {
    return (
        <div className="event-entry">
            <h2 className="event-time">{time}</h2>
            <h2 className="event-title">{title}</h2>
            <h3 className="event-location">{location}</h3>
            <img
                className="event-image"
                src={imgPath ? imgPath : placeholderImgPath}
                alt="Arrangementsbilde"
            />
            <a className="event-ticket-link" href={ticketUrl} target="_blank">
                Kjøp billett.
            </a>
        </div>
    );
};

const TicketPage = () => {
    return (
        <>
            <Header />
            <h1 className="event-date">28.01.2025</h1>

            <div className="event-date-group">
                <TicketItem
                    title="Når er grensa nådd?"
                    category="Revy"
                    time="19:00"
                    location="Revyscenen"
                    ticketUrl="https://billett.blindernuka.no/event/309"
                    imgPath={revyImgPath}
                />
            </div>
            <h1 className="event-date">29.01.2025</h1>
            <div className="event-date-group">
                <TicketItem
                    title="Revy: Når er grensa nådd?"
                    category="Revy"
                    time="19:00"
                    location="Revyscenen"
                    ticketUrl="https://billett.blindernuka.no/event/311"
                    imgPath={revyImgPath}
                />
            </div>
            <Footer />
        </>
    );
};

export default TicketPage;
