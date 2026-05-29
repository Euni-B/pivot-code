interface HeaderProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <header className="app-header">
      <h2>My App</h2>
      {isLoggedIn && (
        <button onClick={handleLogout} style={{ marginLeft: "auto" }}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;