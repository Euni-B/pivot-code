import Counter from "./components/Counter";
import recipe from "./data/recipes";
import RecipeCard from "./components/RecipeCard";


function App() {
  return (
    <div >
      {/* {<Counter />} */}



      {recipe.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe} 
          />
      ))}
    </div>
  );
}




export default App;