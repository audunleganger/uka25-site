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
                    email="janne.d.99@hotmail.com"
                    phone="+45 289 97 649"
                    avatarImagePath={janneImagePath}
                />
                <ContactPersonCard
                    name="Jenny Bjerkås Tangberg"
                    role="Kjellermester"
                    email="jennytangberg@gmail.com"
                    phone="+47 477 52 700"
                    avatarImagePath={jennyImagePath}
                />
                <ContactPersonCard
                    name="Anne Marie Aronsen"
                    role="Arrangementsjef"
                    email="annemarie.aronsen@hotmail.no"
                    phone="+47 974 71 900"
                    avatarImagePath={anneImagePath}
                />
                <ContactPersonCard
                    name="Sofie Johanne Ask Nilsen"
                    role="Markedssjef"
                    email="sojoasni@gmail.com"
                    phone="+47 473 61 876"
                    avatarImagePath={sofieImagePath}
                />
                <ContactPersonCard
                    name="Håvard Rødsand"
                    role="Pressesjef"
                    email="havard.rodsand@icloud.com"
                    phone="+47 400 52 614"
                    avatarImagePath={haavardImagePath}
                />
                <ContactPersonCard
                    name="Håkon Johannes Frankrig"
                    role="Teknisksjef"
                    email="hjfrankrig@gmail.com"
                    phone="+47 939 19 480"
                    avatarImagePath={haakonImagePath}
                />
                <ContactPersonCard
                    name="Henrik Rekk Christensen"
                    role="Økonomisjef"
                    email="he.re.chr@hotmail.no"
                    phone="+47 940 57 947"
                    avatarImagePath={henrikImagePath}
                />
                <ContactPersonCard
                    name="Vetle Volleng"
                    role="Revysjef"
                    email="vollengv@gmail.com"
                    phone="+47 984 48 131"
                    avatarImagePath={vetleImagePath}
                />
            </div>
            <Footer />
        </>
    );
}

export default ContactPage;
