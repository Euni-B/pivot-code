import "./SortButton.css";

function SortButton({ sortOrder, setSortOrder }) {
  const handleClick = () => {
    setSortOrder(sortOrder === "newest" ? "oldest" : "newest");
  };

  return (
    <div className="sort-button">
      <button onClick={handleClick}>
        Sort: {sortOrder === "newest"
          ? "Newest → Oldest"
          : "Oldest → Newest"}
      </button>
    </div>
  );
}

export default SortButton;