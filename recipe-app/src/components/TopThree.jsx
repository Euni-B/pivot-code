import FavoriteCard from "./Favorites/FavoriteCard";


function TopThree({ recipes, favorites, toggleFavorite }) {
  const topThree = [...recipes]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div>
      <h2>Top Three </h2>
     

      <div style ={{
         display: "flex",
         gap: "20px",
         flexWrap: "wrap"}}>
        {topThree.map((recipe) => (
          <FavoriteCard
          key={recipe.id}
          recipe={recipe}
          />
        ))}
      </div>
    </div>
  );
}

export default TopThree;