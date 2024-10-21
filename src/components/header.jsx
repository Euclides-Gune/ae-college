import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useState, useEffect } from "react";

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth);
    }, []);

    return(
        <header className="header">
            <div className="nav_logo">
                <h1>AE-COLLEGE</h1>
            </div>
            <nav className="navbar">
                {screenWidth < 768 && (
                    <MdMenu onClick={() => setToggleMenu(currentState => !currentState)} className="menu" />
                )}

                {
                    (toggleMenu || screenWidth > 768) && (
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/courses">Courses</Link></li>
                            <li><Link to="/about-us">About us</Link></li>
                            <li><Link to="#">Contact us</Link></li>
                        </ul>
                    )
                }     
            </nav>
        </header>
    );
}