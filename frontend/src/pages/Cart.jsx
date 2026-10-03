import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getCartTotal,
  } = useCart();

  const subtotal = getCartTotal();
  const delivery = subtotal > 0 ? 0 : 0;
  const total = subtotal + delivery;

  // Empty Cart
  if (cartItems.length === 0) {
    return (
      <div className="container-fluid px-4 px-md-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center text-center"
          style={{ minHeight: "75vh" }}
        >
          <div
            style={{
              fontSize: "80px",
              marginBottom: "20px",
            }}
          >
            🛒
          </div>

          <h1 className="fw-bold">
            Your Cart is Empty
          </h1>

          <p className="text-muted mt-2">
            Looks like you haven't added anything to your cart yet.
          </p>

          <Link
            to="/products"
            className="btn btn-dark btn-lg mt-3"
          >
            Start Shopping →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="container-fluid px-4 px-md-5 py-5"
      style={{
        background: "#f8f9fc",
        minHeight: "100vh",
      }}
    >
      {/* Heading */}

      <div className="mb-5">
        <span className="hero-badge">
          🛍️ Your Shopping Bag
        </span>

        <h1 className="fw-bold mt-3">
          Shopping Cart
        </h1>

        <p className="text-muted">
          {cartItems.length} item
          {cartItems.length !== 1 ? "s" : ""} in your cart
        </p>
      </div>

      <div className="row g-4">

        {/* Cart Items */}

        <div className="col-lg-8">

          {cartItems.map((item) => (

            <div
              className="card cart-card mb-3"
              key={item._id}
            >

              <div className="card-body p-4">

                <div className="row align-items-center g-3">

                  {/* Image */}

                  <div className="col-4 col-md-2">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded-3"
                      style={{
                        height: "100px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />

                  </div>

                  {/* Product Info */}

                  <div className="col-8 col-md-4">

                    <p className="product-category mb-1">
                      {item.category}
                    </p>

                    <h5 className="fw-bold mb-1">
                      {item.name}
                    </h5>

                    <p className="text-muted mb-0">
                      ₹{item.price} each
                    </p>

                  </div>

                  {/* Quantity */}

                  <div className="col-6 col-md-3">

                    <p className="text-muted small mb-2">
                      Quantity
                    </p>

                    <div
                      className="d-flex align-items-center"
                      style={{ gap: "10px" }}
                    >

                      <button
                        className="btn btn-outline-dark btn-sm"
                        onClick={() =>
                          decreaseQuantity(item._id)
                        }
                      >
                        −
                      </button>

                      <strong>
                        {item.quantity}
                      </strong>

                      <button
                        className="btn btn-outline-dark btn-sm"
                        onClick={() =>
                          increaseQuantity(item._id)
                        }
                      >
                        +
                      </button>

                    </div>

                  </div>

                  {/* Price + Remove */}

                  <div className="col-6 col-md-3 text-md-end">

                    <h5 className="fw-bold">
                      ₹{item.price * item.quantity}
                    </h5>

                    <button
                      className="btn btn-link text-danger p-0"
                      onClick={() =>
                        removeFromCart(item._id)
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

          {/* Continue Shopping */}

          <Link
            to="/products"
            className="text-decoration-none text-dark fw-semibold"
          >
            ← Continue Shopping
          </Link>

        </div>

        {/* Order Summary */}

        <div className="col-lg-4">

          <div className="card cart-summary">

            <div className="card-body p-4">

              <h4 className="fw-bold mb-4">
                Order Summary
              </h4>

              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">
                  Subtotal
                </span>

                <strong>
                  ₹{subtotal}
                </strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">
                  Delivery
                </span>

                <span className="text-success fw-semibold">
                  Free
                </span>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-4">
                <h5 className="fw-bold">
                  Total
                </h5>

                <h5 className="fw-bold">
                  ₹{total}
                </h5>
              </div>

              <Link
                to="/checkout"
                className="btn btn-dark btn-lg w-100"
              >
                Proceed to Checkout →
              </Link>

              <div className="text-center mt-3">

                <small className="text-muted">
                  🔒 Secure checkout
                </small>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Cart;