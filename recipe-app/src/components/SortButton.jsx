function SortButton({ sortOrder, setSortOrder }) {
  const handleClick = () => {
    setSortOrder(sortOrder === "newest" ? "oldest" : "newest");
  };

  return (
    <button
    className="sort-button"
     onClick={handleClick}>
      Sort: {sortOrder === "newest"
        ? "Newest → Oldest"
        : "Oldest → Newest"}
    </button>
  );
}

export default SortButton;