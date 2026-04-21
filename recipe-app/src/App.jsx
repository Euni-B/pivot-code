import Counter from "./components/Counter";
import recipes from "./data/recipes";
import RecipeCard from "./components/RecipeCard";
import FavoriteCard from "./components/FavoriteCard";
import { useState } from "react";


function App() {

  const [search, setSearch] = useState("");

  // favorites functionality 
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((favId) => favId !== id) // remove
        : [...prev, id] // add
    );
  };


  // search functionality 
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const handleSearch = () => {
    const results = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(search.toLowerCase()) ||
      recipe.description.toLowerCase().includes(search.toLowerCase()) ||
      recipe.cookTime.toLowerCase().includes(search.toLowerCase()) ||
      recipe.ingredients.some((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      )
    );

    setFilteredRecipes(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
     <button onClick={handleSearch}>Search</button>
{/* favorites map  */}
                               
             <FavoriteCard
              recipes={filteredRecipes}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
     

      <h2></h2>
      <div className="card-container">
        {filteredRecipes
          .filter((recipe) => !favorites.includes(recipe.id))
          .map((recipe) => (
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




export default App;