import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
    const location = useLocation();

    return (
        <header className="navbar">

            

            <nav className="nav-center">
                <Link
                    to="/"
                    className={location.pathname === "/" ? "active" : ""}
                >
                    Home
                </Link>
                </nav>

                {/* <Link
                    to="/projects"
                    className={location.pathname === "/projects" ? "active" : ""}
                >
                    Projects
                </Link> */}

                <nav className="nav-right">

                <Link
                    to="/about"
                    className={location.pathname === "/about" ? "active" : ""}
                >
                    About
                </Link>
            </nav>

            

                
            
        </header>
    );
}

export default NavBar;