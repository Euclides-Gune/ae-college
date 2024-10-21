import { BsFacebook } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <div className="footer">
            <div className="footer-card-section">
                <div className="footer-cards">
                    <h3>Main Sections</h3>
                    <div className="footer-card">
                        <span><Link to="/" className="footer-link" >Home</Link></span>
                    </div>
                    <div className="footer-card">
                        <span><Link to="/about-us" className="footer-link">About us</Link></span>
                    </div>
                    <div className="footer-card">
                        <span><Link to="/courses" className="footer-link">Courses</Link></span>
                    </div>
                </div>
                <div className="footer-cards">
                    <h3>Support & Contact</h3>
                    <div className="footer-card">
                        <span><Link to="/" className="footer-link" >FAQ</Link></span>
                    </div>
                    <div className="footer-card">
                        <span><Link to="/" className="footer-link">Support</Link></span>
                    </div>
                    <div className="footer-card">
                        <span><Link to="/" className="footer-link">Contact Us</Link></span>
                    </div>
                </div>
                <div className="social-icons">
                    <div className="follow-section">
                        <span className="follow-title"><b>Follow Us</b></span>
                    </div>
                    <div className="icons-area">
                        <Link to='https://web.facebook.com/?_rdc=1&_rdr' className="icons-links" target="blank"><BsFacebook className="icon"/></Link>
                        <Link to='https://www.instagram.com' target="blank" className="icons-links right-icon"><BiLogoInstagramAlt className="icon"/></Link>
                        <Link to='https://x.com/?lang=pt' className="icons-links right-icon" target="blank"><FaSquareXTwitter className="icon"/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

/*
    <a to="/" className="icons-links"><BsFacebook className="icon"/></a>
    <a href="/" className="icons-links right-icon"><BiLogoInstagramAlt className="icon"/></a>
    <a href="/" className="icons-links right-icon"><FaSquareXTwitter className="icon"/></a>
*/