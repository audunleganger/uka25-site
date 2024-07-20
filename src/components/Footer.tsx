import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content-wrapper">
                <div className="some-wrapper">
                    <Link
                        to="https://www.facebook.com/blindernuka"
                        target="_blank"
                    >
                        <button className="some-icon fb-icon">
                            <img
                                src="https://img.icons8.com/ios-glyphs/30/000000/facebook.png"
                                alt="facebook"
                            />
                        </button>
                    </Link>
                    <Link to="https://www.instagram.com/ukapablindern/">
                        <button className="some-icon insta-icon">
                            <img
                                src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png"
                                alt="instagram"
                            />
                        </button>
                    </Link>
                </div>
                <div className="info-box">
                    <p>
                        Adresse
                        <br />
                        Blindern Studenterhjem, Problemveien 10, 0371 Oslo
                    </p>
                    <p>
                        Kontakt
                        <br />
                        <Link to="mailto:kontakt@blindernuka.no">
                            kontakt@blindernuka.no
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
