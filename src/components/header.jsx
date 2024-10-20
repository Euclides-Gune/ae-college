import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header className="header">
            <div className="nav_logo">
                <h1>AE-COLLEGE</h1>
            </div>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/about-us">About us</Link></li>
                    <li><Link to="#">Contact us</Link></li>
                </ul>
            </nav>
        </header>
    );
}