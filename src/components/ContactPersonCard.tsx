import contactPersonAvatar from "../assets/board-images/haavard.jpg";
import "./ContactPersonCard.css";

const ContactPersonCard = () => {
    return (
        <div className="contact-person-card">
            <img
                className="contact-person-card-avatar"
                src={contactPersonAvatar}
            />
            <h1 className="contact-person-card-name">Håvard Rødsand</h1>
            <h2 className="contact-person-card-role">Pressesjef</h2>
            <p className="contact-person-card-email">håvard@epost.cum</p>
            <p className="contact-person-card-phone">123 45 678</p>
        </div>
    );
};

export default ContactPersonCard;
