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
                        <span><a href="/" className="footer-link" >Home</a></span>
                    </div>
                    <div className="footer-card">
                        <span><a href="/" className="footer-link">About us</a></span>
                    </div>
                    <div className="footer-card">
                        <span><a href="/courses" className="footer-link">Courses</a></span>
                    </div>
                </div>
                <div className="footer-cards">
                    <h3>Support & Contact</h3>
                    <div className="footer-card">
                        <span><a href="/" className="footer-link" >FAQ</a></span>
                    </div>
                    <div className="footer-card">
                        <span><a href="/" className="footer-link">Support</a></span>
                    </div>
                    <div className="footer-card">
                        <span><a href="/" className="footer-link">Contact Us</a></span>
                    </div>
                </div>
                <div className="social-icons">
                    <div className="follow-section">
                        <span className="follow-title">Follow Us</span>
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
    <a href="/" className="icons-links"><BsFacebook className="icon"/></a>
    <a href="/" className="icons-links right-icon"><BiLogoInstagramAlt className="icon"/></a>
    <a href="/" className="icons-links right-icon"><FaSquareXTwitter className="icon"/></a>
*/