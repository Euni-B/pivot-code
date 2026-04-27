import recipes from "./data/recipes";
import FavoriteCard from "./components/Favorites/FavoriteCard";
import FavoritesSection from "./components/Favorites/FavoritesSection";
import SearchBar from "./components/SearchBar/SearchBar";
import RecipeList from "./components/Recipe/RecipeList";
import TopThree from "./components/TopThree/TopThree";
import SortButton from "./components/SortButton/SortButton";
import { useState } from "react";



function App() {
  // search state
  const [search, setSearch] = useState("");

  // favorites state
  const [favorites, setFavorites] = useState([]);

  // rating state 
  const [topRated, setTopRated] = useState([]);

  // sort state
  const [sortOrder, setSortOrder] = useState("newest");

  const allRecipes = recipes;

  // toggle favorite
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id]
    );
  };

  //  derived state (no useState needed)
  const filteredRecipes =
    search.trim() === ""
      ? recipes
      : recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(search.toLowerCase()) ||
        recipe.description.toLowerCase().includes(search.toLowerCase()) ||
        String(recipe.cookTime).toLowerCase().includes(search.toLowerCase()) ||
        recipe.ingredients.some((item) =>
          item.toLowerCase().includes(search.toLowerCase())
        )
      );

  // sort recipes by date
  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.dateCreated) - new Date(a.dateCreated);
    } else {
      return new Date(a.dateCreated) - new Date(b.dateCreated);
    }
  });

  return (
    <div >

      {/* HEADER */}
      <div className="controls">
        <SearchBar search={search} setSearch={setSearch} />
        <SortButton sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>

      {/* SEARCH RESULTS */}
      {search.trim() !== "" && (
        <div className="search-results-section">
          <h2>Search Results</h2>

          {filteredRecipes.length > 0 ? (
            <RecipeList
              recipes={filteredRecipes}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      )}

      {/* DASHBOARD ROW */}
      <div className="dashboard-row">
        <div className="top-three-section">
          <TopThree
            recipes={recipes}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        </div>

        <div className="favorites-section">
          <FavoritesSection
            recipes={recipes}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        </div>
      </div>

      {/* ALL RECIPES */}
      <div className="all-recipes-section">
        <h2>All Recipes</h2>

        <RecipeList
          recipes={recipes}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </div>

    </div>
  );
}

export default App;