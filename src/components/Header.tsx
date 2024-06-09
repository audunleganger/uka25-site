import "./Header.css"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-wrapper">
        <Link to="/">
            <img src="src/assets/uka-blindern-2017.png" alt="uka-logo" className="uka-logo" />
        </Link>
            <span className="header-button">Hjem</span>
            <span className="header-button">Artister</span>
            <span className="header-button">Program</span>
            <span className="header-button">Om oss</span>
    </div>
  )
}
