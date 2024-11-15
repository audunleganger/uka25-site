import Header from "../components/Header";
import ContactPersonCard from "../components/ContactPersonCard";
import Footer from "../components/Footer";
import "./ContactPage.css";
// import Sidebar from "../components/Sidebar";

// avatar image paths
import janneImagePath from "../assets/board-images/janne-avatar.jpg";
import jennyImagePath from "../assets/board-images/jenny-avatar.jpg";
import anneImagePath from "../assets/board-images/anne-marie-avatar.jpg";
import sofieImagePath from "../assets/board-images/sofie-avatar.jpg";
import haavardImagePath from "../assets/board-images/haavard-avatar.jpg";
import haakonImagePath from "../assets/board-images/haakon-avatar.jpg";
import vetleImagePath from "../assets/board-images/vetle-avatar.jpg";
import henrikImagePath from "../assets/board-images/henrik-avatar.jpg";
function ContactPage() {
    return (
        <>
            <Header />
            <div className="contact-card-wrapper">
                <ContactPersonCard
                    name="Janne Dahl Sørensen Dimitrova"
                    role="UKE-sjef"
                    email="janne@mail.com"
                    phone="123 45 678"
                    avatarImagePath={janneImagePath}
                />
                <ContactPersonCard
                    name="Jenny Bjerkås Tangberg"
                    role="Kjellermester"
                    email=""
                    phone="123 45 678"
                    avatarImagePath={jennyImagePath}
                />
                <ContactPersonCard
                    name="Anne Marie Aronsen"
                    role="Arrangementsjef"
                    email=""
                    phone=""
                    avatarImagePath={anneImagePath}
                />
                <ContactPersonCard
                    name="Sofie Johanne Ask Nilsen"
                    role="Markedssjef"
                    email=""
                    phone=""
                    avatarImagePath={sofieImagePath}
                />
                <ContactPersonCard
                    name="Håvard Rødsand"
                    role="Pressesjef"
                    email=""
                    phone=""
                    avatarImagePath={haavardImagePath}
                />
                <ContactPersonCard
                    name="Håkon Johannes Frankrig"
                    role="Teknisksjef"
                    email=""
                    phone=""
                    avatarImagePath={haakonImagePath}
                />
                <ContactPersonCard
                    name="Henrik Rekk Christensen"
                    role="Økonomisjef"
                    email=""
                    phone=""
                    avatarImagePath={henrikImagePath}
                />
                <ContactPersonCard
                    name="Vetle Volleng"
                    role="Revysjef"
                    email=""
                    phone=""
                    avatarImagePath={vetleImagePath}
                />
            </div>
            <Footer />
        </>
    );
}

export default ContactPage;
