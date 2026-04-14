function RecipeCard({ recipe }) {
    return (
        <div className="card" >
            <h2 className="card-title"> {recipe.name}</h2>
            <p className="card-image">{recipe.image}</p>
            <p className="description">{recipe.description}</p>
            <p className="cook-time">Cook time: {recipe.cookTime}</p>



            <ul>
                {recipe.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

        </div>
    )

}
export default RecipeCard;