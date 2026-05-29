import logo from "../assets/logo.png";
import { FaSignOutAlt } from "react-icons/fa";
import "./Header.css";

interface HeaderProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  username: string;
}

const Header = ({ isLoggedIn, setIsLoggedIn, username }: HeaderProps) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
  };

  return (
    <header className="header">
      <img src={logo} alt="Cat Task Manager" className="app-logo" />
      <div className="header-right">
        <span className="welcome">Hello, {username}</span>
        {isLoggedIn && (
          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;