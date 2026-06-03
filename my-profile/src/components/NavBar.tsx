import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
    const location = useLocation();

    return (
        <header className="navbar">

            <div className="nav-left">
                <div className="logo">
                    Portfolio
                </div>
            </div>

            <nav className="nav-center">
                <Link
                    to="/"
                    className={location.pathname === "/" ? "active" : ""}
                >
                    Home
                </Link>

                <Link
                    to="/projects"
                    className={location.pathname === "/projects" ? "active" : ""}
                >
                    Projects
                </Link>

                <Link
                    to="/about"
                    className={location.pathname === "/about" ? "active" : ""}
                >
                    About
                </Link>
            </nav>

            <div className="nav-right">
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </div>

        </header>
    );
}

export default NavBar;