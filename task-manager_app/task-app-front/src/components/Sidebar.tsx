import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaSignInAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="sidebar-top">
        <h2>TaskFlow</h2>
      </div>

      <nav className="sidebar-links">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          <FaHome />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          <FaInfoCircle />
          <span>About</span>
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          <FaSignInAlt />
          <span>Login</span>
        </NavLink>

      </nav>
    </div>
  );
}

export default Sidebar;