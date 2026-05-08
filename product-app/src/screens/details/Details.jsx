import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCart } from "../../context/CartContext";
import "./Details.css";

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [selectedImage, setSelectedImage] = useState("");
  const { addToCart } = useCart();


  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setSelectedImage(data.thumbnail);
      });
  }, [id]);

  let stockStatus = "";

  if (product) {
    if (product.stock === 0) {
      stockStatus = "Sold Out";
    } else if (product.stock < 5) {
      stockStatus = "Low Stock";
    } else {
      stockStatus = "In Stock";
    }
  }

  return (
    <div className="details-page">
      {product ? (
        <div className="details-card">

          <div className="details-container">
            {/* LEFT: IMAGE GALLERY */}
            <div className="image-section">
              <img
                className="main-image"
                src={selectedImage}
                alt={product.title}
              />

              <div className="image-row">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    onClick={() => setSelectedImage(img)}
                    className={selectedImage === img ? "active" : ""}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT: PRODUCT INFO */}
            <div className="info-section">
              <h1>{product.title}</h1>
              <p className="brand">{product.brand}</p>
              <p className="rating">⭐ {product.rating}</p>
              <p className="price">${product.price}</p>

              <p
                className={`stock ${product.stock === 0
                  ? "out-of-stock"
                  : product.stock < 5
                    ? "low-stock"
                    : "in-stock"
                  }`}
              >
                {stockStatus}
              </p>

              <p className="description">{product.description}</p>

              <button
                className="buy-btn"
                onClick={() => {
                  addToCart(product);

                  toast.success("Added to cart 🛒", {
                    position: "top-right",
                    autoClose: 1500,
                  });
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* REVIEWS (still inside card) */}
          <div className="reviews-section">
            <h2>Customer Reviews</h2>

            {product.reviews.map((review, index) => (
              <div key={index} className="review-card">
                <p>⭐ {review.rating}</p>
                <p>{review.comment}</p>
                <p className="reviewer">{review.reviewerName}</p>
              </div>
            ))}
          </div>

        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

export default Details;