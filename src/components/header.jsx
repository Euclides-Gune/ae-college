export default function Header() {
    return <header className="header">
        <div className="nav_logo">
            <h1>AE-COLLEGE</h1>
        </div>
        <nav className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/courses">Courses</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
        </nav>
    </header>
}