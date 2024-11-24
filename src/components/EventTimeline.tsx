import "./EventTimeline.css";
import React from "react";

interface EventProps {
    title: string;
    time: string;
    location: string;
    ticketRequired: boolean;
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
}) => {
    return (
        <div className="event">
            <span className="event-name">
                {title + (ticketRequired ? "<T>" : "")}
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

const EventTimeline: React.FC = () => {
    return (
        <div className="event-timeline">
            <EventGroup title="Test-aften" date="11.11.2024">
                <Event
                    title="Event-navn"
                    time="19:00"
                    location="Beisestua"
                    ticketRequired={true}
                />
                <Event
                    title="Ny-event-navn"
                    time="20:00"
                    location="Beisestua"
                    ticketRequired={false}
                />
            </EventGroup>
            <EventGroup title="Koraften" date="11.11.2024">
                <Event
                    title="Event-navn"
                    time="19:00"
                    location="Beisestua"
                    ticketRequired={true}
                />
                <Event
                    title="Event-navn"
                    time="20:00"
                    location="Beisestua"
                    ticketRequired={false}
                />
            </EventGroup>
            <EventGroup title="Koraften" date="11.11.2024">
                <Event
                    title="Event-navn"
                    time="19:00"
                    location="Beisestua"
                    ticketRequired={true}
                />
                <Event
                    title="Event-navn"
                    time="20:00"
                    location="Beisestua"
                    ticketRequired={false}
                />
            </EventGroup>
            <EventGroup title="Festivaldag 1" date="11.11.2024">
                <Event
                    title="Event-navn"
                    time="19:00"
                    location="Beisestua"
                    ticketRequired={true}
                />
                <Event
                    title="Event-navn"
                    time="20:00"
                    location="Beisestua"
                    ticketRequired={false}
                />
            </EventGroup>
            <EventGroup title="Festivaldag 1" date="11.11.2024">
                <Event
                    title="Event-navn"
                    time="19:00"
                    location="Beisestua"
                    ticketRequired={true}
                />
                <Event
                    title="Event-navn"
                    time="20:00"
                    location="Beisestua"
                    ticketRequired={false}
                />
            </EventGroup>
        </div>
    );
};

export default EventTimeline;
