import "./EventTimeline.css";
import React from "react";
import ticketIcon from "../assets/icons/ticket-icon.svg";

interface EventProps {
    title: string;
    time: string;
    location: string;
    ticketRequired: boolean;
    ticketLink?: string;
}
interface EventGroupProps {
    title: string;
    date: string;
    children: React.ReactNode;
}

const Event: React.FC<EventProps> = ({
    title,
    time,
    location,
    ticketRequired,
    ticketLink,
}) => {
    return (
        <div className="event">
            <span className="event-name">
                {title}
                {ticketRequired && ticketLink && (
                    <div className="ticket-icon-wrapper">
                        <img
                            className="ticket-icon"
                            src={ticketIcon}
                            alt="Ticket Icon"
                            onClick={() => {
                                window.open(ticketLink);
                            }}
                        />
                    </div>
                )}
            </span>
            <span className="event-time">{time}</span>
            <span className="event-location">{location}</span>
        </div>
    );
};

const EventGroup: React.FC<EventGroupProps> = ({ title, date, children }) => {
    return (
        <div className="event-group">
            <div className="event-group-header-info">
                <h1>{title}</h1>
                <h1>{date}</h1>
            </div>
            {children}
        </div>
    );
};

interface EventTimelineProps {
    className?: string;
}
const EventTimeline: React.FC<EventTimelineProps> = ({ className }) => {
    return (
        <div className={`event-timeline ${className}`}>
            <EventGroup title="UKEtog & UKEvors" date="27.01.2025">
                <Event
                    title="UKEtog"
                    time="14:00"
                    location="Karl Johan"
                    ticketRequired={false}
                />
                <Event
                    title="Billa Bar åpner"
                    time="17:00"
                    location="Billa Bar"
                    ticketRequired={false}
                />
                <Event
                    title="UKEvors"
                    time="17:00"
                    location="Billa Bar"
                    ticketRequired={false}
                />
            </EventGroup>
            <EventGroup title="Generalprøve" date="28.01.2025">
                <Event
                    title="Rumpa Bar & Galleriet Bar åpner"
                    time="18:30"
                    location="Peisestuen"
                    ticketRequired={false}
                />
                <Event
                    title="Revy: Når er grensa nådd? (kun for inviterte)"
                    time="19:00"
                    location="Revyscenen"
                    ticketRequired={false}
                />
                <Event
                    title="Billa Bar åpner"
                    time="21:00"
                    location="Billa Bar"
                    ticketRequired={false}
                />
                <Event
                    title="Husband"
                    time="22:00"
                    location="Spektrum"
                    ticketRequired={false}
                />
            </EventGroup>
            <EventGroup title="Beboerpremiere" date="29.01.2025">
                <Event
                    title="Rumpa Bar & Galleriet Bar åpner"
                    time="18:30"
                    location="Peisestuen"
                    ticketRequired={false}
                />
                <Event
                    title="Revy: Når er grensa nådd? (gratis inngang kun for beboere)"
                    time="19:00"
                    location="Revyscenen"
                    ticketRequired={false}
                />
                <Event
                    title="ULKA Bar åpner"
                    time="21:00"
                    location="Romerbadet"
                    ticketRequired={false}
                />
                <Event
                    title="Billa Bar åpner"
                    time="21:00"
                    location="Billa Bar"
                    ticketRequired={false}
                />
                <Event
                    title="UKAraoke"
                    time="22:00"
                    location="Billa"
                    ticketRequired={false}
                />
            </EventGroup>
            <EventGroup title="Urpremiere" date="30.01.2025">
                <Event
                    title="Rumpa Bar & Galleriet Bar åpner"
                    time="18:30"
                    location="Peisestuen"
                    ticketRequired={false}
                />
                <Event
                    title="Revy: Når er grensa nådd? (urpremiere, kun for inviterte)"
                    time="19:00"
                    location="Revyscenen"
                    ticketRequired={false}
                />
                <Event
                    title="VIP matservering"
                    time="21:00"
                    location="Matsalen"
                    ticketRequired={false}
                />
                <Event
                    title="Billa Bar åpner"
                    time="21:30"
                    location="Billa Bar"
                    ticketRequired={false}
                />
                <Event
                    title="Live jazz"
                    time="21:30"
                    location="Matsalen"
                    ticketRequired={false}
                />
            </EventGroup>
            <EventGroup title="Premiere & Pub til Pub" date="31.01.2025">
                <Event
                    title="Billa Bar åpner"
                    time="17:00"
                    location="Billa"
                    ticketRequired={false}
                />
                <Event
                    title="Rumpa Bar & Galleriet Bar åpner"
                    time="17:30"
                    location="Peisestuen"
                    ticketRequired={false}
                />
                <Event
                    title="Revy: Når er grensa nådd?"
                    time="18:00"
                    location="Revyscenen"
                    ticketRequired={true}
                    ticketLink="https://billett.blindernuka.no/event/316"
                />
                <Event
                    title="ULKA Bar åpner"
                    time="19:00"
                    location="Romerbadet"
                    ticketRequired={false}
                />
                <Event
                    title="Spektrum Bar åpner"
                    time="19:00"
                    location="Gymsalen"
                    ticketRequired={false}
                />
                <Event
                    title="Amish Plow"
                    time="20:30"
                    location="Spektrum"
                    ticketRequired={true}
                    ticketLink="https://billett.blindernuka.no/event/317"
                />
                <Event
                    title="Allsang med Diabetes Type Beat"
                    time="23:30"
                    location="ULKA"
                    ticketRequired={false}
                />
            </EventGroup>
            <EventGroup title="GB-aften" date="01.02.2025">
                <Event
                    title="Rumpa Bar & Galleriet Bar åpner"
                    time="17:30"
                    location="Peisestuen"
                    ticketRequired={false}
                />
                <Event
                    title="Revy: Når er grensa nådd? 1"
                    time="18:30"
                    location="Revyscenen"
                    ticketRequired={true}
                    ticketLink={"https://billett.blindernuka.no/event/319"}
                />
                <Event
                    title="Billa Bar åpner"
                    time="18:30"
                    location="Billa"
                    ticketRequired={false}
                />
                <Event
                    title="Revy: Når er grensa nådd? 2"
                    time="21:30"
                    location="Revyscenen"
                    ticketRequired={true}
                    ticketLink={"https://billett.blindernuka.no/event/320"}
                />
                <Event
                    title="ULKA Bar åpner"
                    time="21:30"
                    location="Romerbadet"
                    ticketRequired={false}
                />
                <Event
                    title="Spektrum Bar åpner"
                    time="23:00"
                    location="Gymsalen"
                    ticketRequired={false}
                />
                <Event
                    title="Cinnamon Girls"
                    time="23:45"
                    location="Spektrum"
                    ticketRequired={false}
                />
            </EventGroup>

            <EventGroup title="Koraften" date="05.02.2025">
                <Event
                    title="Rumpa Bar & Galleriet Bar åpner"
                    time="17:00"
                    location="Peisestuen"
                    ticketRequired={false}
                />
                <Event
                    title="Revy: Når er grensa nådd? (kun for inviterte)"
                    time="18:00"
                    location="Revyscenen"
                    ticketRequired={false}
                />
                <Event
                    title="Matine"
                    time="20:00"
                    location="Peisestuen"
                    ticketRequired={false}
                />
                <Event
                    title="ULKA Bar åpner"
                    time="22:00"
                    location="Billa"
                    ticketRequired={false}
                />
                <Event
                    title="Billa Bar åpner"
                    time="22:00"
                    location="Billa"
                    ticketRequired={false}
                />
                <Event
                    title="Turku"
                    time="22:00"
                    location="Fasaden"
                    ticketRequired={false}
                />
            </EventGroup>
            <EventGroup title="Mytisk aften/temakveld" date="06.02.2025">
                <Event
                    title="Rumpa Bar & Galleriet Bar åpner"
                    time="17:30"
                    location="Peisestuen"
                    ticketRequired={false}
                />
                <Event
                    title="Revy: Når er grensa nådd?"
                    time="18:00"
                    location="Revyscenen"
                    ticketRequired={true}
                    ticketLink={"https://billett.blindernuka.no/event/326"}
                />
                <Event
                    title="Billa Bar åpner"
                    time="20:00"
                    location="Billa"
                    ticketRequired={false}
                />
                <Event
                    title="Magisk Show med Tjora"
                    time="20:15"
                    location=""
                    ticketRequired={true}
                    ticketLink={"https://billett.blindernuka.no/event/372"}
                />
                <Event
                    title="ULKA Bar åpner"
                    time="21:00"
                    location="Romerbadet"
                    ticketRequired={false}
                />
                <Event
                    title="Podcast: FASIT med Henrik og Oliver"
                    time="21:15"
                    location="Revyscenen"
                    ticketRequired={true}
                    ticketLink={"https://billett.blindernuka.no/event/328"}
                />
                <Event
                    title="Lupina"
                    time="22:30"
                    location="Spektrum"
                    ticketRequired={true}
                    ticketLink={"https://billett.blindernuka.no/event/329"}
                />
            </EventGroup>
            <EventGroup title="Festivaldag 1" date="07.02.2025">
                <Event
                    title="Rumpa Bar & Galleriet Bar åpner"
                    time="17:30"
                    location="Peisestuen"
                    ticketRequired={false}
                />
                <Event
                    title="Revy: Når er grensa nådd?"
                    time="18:00"
                    location="Revyscenen"
                    ticketRequired={true}
                    ticketLink={"https://billett.blindernuka.no/event/301"}
                />
                <Event
                    title="Billa Bar åpner"
                    time="19:30"
                    location="Billa"
                    ticketRequired={false}
                />
                <Event
                    title="Spektrum Bar åpner"
                    time="19:30"
                    location="Gymsalen"
                    ticketRequired={false}
                />
                <Event
                    title="Swada"
                    time="20:30"
                    location="Spektrum"
                    ticketRequired={true}
                    ticketLink={"https://billett.blindernuka.no/event/298"}
                />
                <Event
                    title="Jesper Jenset"
                    time="22:00"
                    location="Spektrum"
                    ticketRequired={true}
                    ticketLink={"https://billett.blindernuka.no/event/299"}
                />
                <Event
                    title="ULKA Bar åpner"
                    time="23:30"
                    location="Romerbadet"
                    ticketRequired={false}
                />
            </EventGroup>
            <EventGroup title="Festivaldag 2" date="08.02.2025">
                <Event
                    title="Rumpa Bar & Galleriet Bar åpner"
                    time="17:30"
                    location="Peisestuen"
                    ticketRequired={false}
                />
                <Event
                    title="Revy: Når er grensa nådd?"
                    time="18:00"
                    location="Revyscenen"
                    ticketRequired={true}
                    ticketLink={"https://billett.blindernuka.no/event/304"}
                />
                <Event
                    title="Billa Bar åpner"
                    time="19:30"
                    location="Billa"
                    ticketRequired={false}
                />
                <Event
                    title="Spektrum Bar åpner"
                    time="19:30"
                    location="Gymsalen"
                    ticketRequired={false}
                />
                <Event
                    title="Simen Steinklev"
                    time="20:30"
                    location="Spektrum"
                    ticketRequired={true}
                    ticketLink={"https://billett.blindernuka.no/event/305"}
                />
                <Event
                    title="Gjenfødt Kultur"
                    time="22:00"
                    location="Spektrum"
                    ticketRequired={true}
                    ticketLink={"https://billett.blindernuka.no/event/306"}
                />
                <Event
                    title="ULKA Bar åpner"
                    time="23:30"
                    location="Romerbadet"
                    ticketRequired={false}
                />
            </EventGroup>
            <EventGroup title="Teppefall" date="09.02.2025">
                <Event
                    title="Rumpa Bar & Galleriet Bar åpner"
                    time="17:30"
                    location="Peisestuen"
                    ticketRequired={false}
                />
                <Event
                    title="Revy: Når er grensa nådd? (internt for beboere)"
                    time="18:00"
                    location="Revyscenen"
                    ticketRequired={true}
                />
                <Event
                    title="Griserevyen (kun for beboere)"
                    time="21:00"
                    location="Revyscenen"
                    ticketRequired={false}
                />
                <Event
                    title="Vællentain"
                    time="23:00"
                    location="Revyscenen"
                    ticketRequired={false}
                />
                <Event
                    title="Billa Bar åpner"
                    time="23:59"
                    location="Billa"
                    ticketRequired={false}
                />
                <Event
                    title="ULKA Bar åpner"
                    time="23:59"
                    location="Romerbadet"
                    ticketRequired={false}
                />
            </EventGroup>
        </div>
    );
};

export default EventTimeline;
