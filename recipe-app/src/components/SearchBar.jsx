function SearchBar({ search, setSearch }) {
  return (
    <div>
      <h2>Search</h2>
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;