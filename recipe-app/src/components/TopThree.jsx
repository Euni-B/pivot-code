import RecipeCard from "./Recipe/RecipeCard";

function TopThree({ recipes, favorites, toggleFavorite }) {
  const topThree = [...recipes]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div>
      <h2>Top Three ⭐</h2>

      <div className="card-container">
        {topThree.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default TopThree;