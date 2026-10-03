import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card product-card h-100">

        <div className="overflow-hidden">
          <img
            src={product.image}
            className="product-card-image"
            alt={product.name}
          />
        </div>

        <div className="card-body d-flex flex-column">

          <p className="product-category mb-2">
            {product.category}
          </p>

          <h5 className="card-title">
            {product.name}
          </h5>

          <p className="text-muted small mb-3">
            {product.description}
          </p>

          <div className="mt-auto">

            <div className="product-price mb-3">
              ₹{product.price}
            </div>

            <Link
              to={`/products/${product._id}`}
              className="btn btn-dark w-100 mb-2"
            >
              View Product
            </Link>

            <button
              className="btn btn-primary w-100"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;