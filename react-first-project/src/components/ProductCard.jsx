function ProductCard({

    product,
    addToCart
}) {

console.log(product);

    return (
        <div className="product-card">
    <h3>{product.name}</h3>
    <p>${product.price}</p>

    <img src={product.img} alt={product.name} />

    <p style={{ color: product.inStock ? "green" : "red" }}>
        {product.inStock ? "In Stock" : "Sold Out"}
    </p>

    <h6>Sizes</h6>
    {product.sizes.map((s, i) => (
        <p key={i}>{s}</p>
    ))}

    <h6>Brand: {product.details.brand}</h6>
    <p>Material: {product.details.material}</p>
    <p>Care: {product.details.care}</p>

            <button onClick={addToCart} disabled={!product.inStock}>
                Add to Cart
            </button>
        </div>
    )
}
export default ProductCard;