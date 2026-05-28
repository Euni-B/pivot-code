function Header() {
  return (
    <div className="header">
      <h2>Task Manager</h2>

      <div className="header-right">
        <p>Hello, Eunice</p>

        <button className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;