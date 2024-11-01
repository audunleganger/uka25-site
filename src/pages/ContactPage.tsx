import Header from "../components/Header";
import ContactPersonCard from "../components/ContactPersonCard";
import Footer from "../components/Footer";
import "./ContactPage.css";
// import Sidebar from "../components/Sidebar";

function ContactPage() {
    return (
        <>
            <Header />
            <div className="contact-card-wrapper">
                <ContactPersonCard />
                <ContactPersonCard />
                <ContactPersonCard />
                <ContactPersonCard />
                <ContactPersonCard />
                <ContactPersonCard />
                <ContactPersonCard />
                <ContactPersonCard />
            </div>
            <Footer />
        </>
    );
}

export default ContactPage;
