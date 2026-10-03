import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import API from "../api";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await API.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <h2>Loading Product...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Product Not Found</h2>

        <Link
          to="/products"
          className="btn btn-dark mt-3"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert("Product added to cart!");
  };

  return (
    <div className="container-fluid px-4 px-md-5 py-5">

      <div className="row align-items-center g-5">

        {/* Product Image */}

        <div className="col-lg-6">

          <div className="p-3 bg-white rounded-4 shadow-sm">

            <img
              src={product.image}
              alt={product.name}
              className="img-fluid product-details-image w-100"
              style={{
                height: "500px",
                objectFit: "cover",
              }}
            />

          </div>

        </div>

        {/* Product Information */}

        <div className="col-lg-6">

          <span className="hero-badge">
            {product.category}
          </span>

          <h1 className="display-4 fw-bold mt-3">
            {product.name}
          </h1>

          <div className="my-4">

            <span
              style={{
                fontSize: "32px",
                fontWeight: "700",
              }}
            >
              ₹{product.price}
            </span>

          </div>

          <p
            className="text-muted"
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            {product.description}
          </p>

          {/* Product Benefits */}

          <div className="my-4">

            <div className="d-flex align-items-center mb-3">
              <span className="me-3 fs-4">✓</span>
              <span>Quality Product</span>
            </div>

            <div className="d-flex align-items-center mb-3">
              <span className="me-3 fs-4">🚚</span>
              <span>Fast Delivery</span>
            </div>

            <div className="d-flex align-items-center">
              <span className="me-3 fs-4">🔒</span>
              <span>Secure Shopping</span>
            </div>

          </div>

          {/* Buttons */}

          <div className="d-flex flex-wrap gap-3 mt-4">

            <button
              className="btn btn-dark btn-lg"
              onClick={handleAddToCart}
            >
              🛒 Add to Cart
            </button>

            <Link
              to="/cart"
              className="btn btn-outline-dark btn-lg"
            >
              View Cart
            </Link>

          </div>

          {/* Back */}

          <div className="mt-4">

            <Link
              to="/products"
              className="text-decoration-none text-muted"
            >
              ← Back to Products
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;