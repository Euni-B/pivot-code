import Button from './components/Button'
import ProductCard from './components/ProductCard'
import PRODUCTS from './data/product'
import RecipeCard  from './components/RecipeCard'
import RECIPE from './data/recipe'



// components
function App() {
  // const [count, setCount] = useState(0)
  function alertHello() {
    alert("Hello!")
  }
  function alertGoodbye() {
    alert("Goodbye!")
  }

  function addToCart(productName) {
    alert(`Added ${productName} to cart!`)
  }


  return (
    <div className="App">


<Button
        text="Alert Hello!"
        click={alertHello}
      />
      <Button
        text="Alert Goodbye!"
        click={alertGoodbye}
      />


      {
        PRODUCTS.map(
          (product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={() => addToCart(product.name)}
            />
          ))
      }
      {
        RECIPE.map(
          (recipe, index) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))
      }


      


    </div>
  )
}

export default App
