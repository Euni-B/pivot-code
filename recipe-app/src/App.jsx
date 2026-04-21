import recipes from "./data/recipes";
import FavoriteCard from "./components/Favorites/FavoriteCard";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/Recipe/RecipeList";
import { useState } from "react";

function App() {
  // search state
  const [search, setSearch] = useState("");

  // favorites state
  const [favorites, setFavorites] = useState([]);

  // toggle favorite
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id]
    );
  };

  // 🔥 derived state (no useState needed)
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase()) ||
    recipe.description.toLowerCase().includes(search.toLowerCase()) ||
    recipe.cookTime.toLowerCase().includes(search.toLowerCase()) ||
    recipe.ingredients.some((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div>
      {/* Search */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Favorites Section */}
      <FavoriteCard
        recipes={filteredRecipes}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />

      {/* All Recipes */}
      <RecipeList
        recipes={filteredRecipes}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default App;