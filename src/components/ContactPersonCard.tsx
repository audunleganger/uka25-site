import "./ContactPersonCard.css";

interface ContactPersonCardProps {
    name: string;
    role: string;
    email: string;
    phone: string;
    avatarImagePath: string;
}
const ContactPersonCard: React.FC<ContactPersonCardProps> = ({
    name,
    role,
    email,
    phone,
    avatarImagePath,
}) => {
    return (
        <div className="contact-person-card">
            <img className="contact-person-card-avatar" src={avatarImagePath} />
            <h1 className="contact-person-card-name">{name}</h1>
            <h2 className="contact-person-card-role">{role}</h2>
            <p className="contact-person-card-email">{email}</p>
            <p className="contact-person-card-phone">{phone}</p>
        </div>
    );
};

export default ContactPersonCard;
