 function RecipeCard({ 
    
    recipe
}) 

{
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />

      <h2>{recipe.title}</h2>

      <p>{recipe.description}</p>

      <div className="meta">
        <span> {recipe.time} mins</span>
        <span> {recipe.servings} servings</span>
      </div>

      <h4>Ingredients</h4>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h4>Instructions</h4>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      
    </div>
  );
}
export default RecipeCard;