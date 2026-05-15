import { Link } from "react-router-dom";
import { Search } from "lucide-react"; 
import './Header.css';
function Header() {
  return (
    <header className="header">
      {/* LEFT */}
      <div className="logo">
        <Link to="/">MovieApp</Link>
      </div>

      {/* MIDDLE */}
      <nav className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/favorites">Favorites</Link>

        <Link to="/popular">Popular</Link>

        <Link to="now-playing">Now Playing</Link>

        <Link to="/up-coming">Upcoming</Link>

        <Link to="/about">About</Link>
      </nav>

      {/* RIGHT */}
      <div className="search-icon">
        <Link to="/search">
          <Search size={24} />
        </Link>
      </div>
    </header>
  );
}

export default Header;