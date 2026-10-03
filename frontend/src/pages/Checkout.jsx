import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import API from "../api";

function Checkout() {
  const { cartItems, getCartTotal } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "Cash on Delivery",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const subtotal = getCartTotal();
  const delivery = 0;
  const total = subtotal + delivery;

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Place Order
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const orderData = {
        customer: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
        },

        products: cartItems.map((item) => ({
          productId: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),

        totalAmount: total,

        paymentMethod: formData.payment,
      };

      console.log("Sending order:", orderData);

      const response = await API.post("/orders", orderData);

      console.log("Order created:", response.data);

      setShowSuccess(true);
    } catch (error) {
      console.error("Order creation failed:", error);

      alert(
        error.response?.data?.message ||
          "Failed to place order. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Empty cart
  if (cartItems.length === 0 && !showSuccess) {
    return (
      <div className="container-fluid px-4">
        <div
          className="d-flex flex-column align-items-center justify-content-center text-center"
          style={{ minHeight: "75vh" }}
        >
          <div style={{ fontSize: "70px" }}>🛒</div>

          <h2 className="fw-bold mt-3">Your Cart is Empty</h2>

          <p className="text-muted">
            Add some products before going to checkout.
          </p>

          <Link
            to="/products"
            className="btn btn-dark mt-3"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  // Success screen
  if (showSuccess) {
    return (
      <div className="container-fluid px-4">
        <div
          className="d-flex flex-column align-items-center justify-content-center text-center"
          style={{ minHeight: "75vh" }}
        >
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              background: "#e8f8ee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "45px",
              marginBottom: "25px",
            }}
          >
            ✓
          </div>

          <h1 className="fw-bold">
            Order Placed Successfully!
          </h1>

          <p className="text-muted mt-2">
            Thank you for shopping with ShopSphere.
          </p>

          <p>
            Your order total is{" "}
            <strong>₹{total}</strong>
          </p>

          <button
            className="btn btn-dark btn-lg mt-3"
            onClick={() => navigate("/products")}
          >
            Continue Shopping
          </button>
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
      {/* PAGE HEADING */}

      <div className="mb-5">
        <span className="hero-badge">
          🔒 Secure Checkout
        </span>

        <h1 className="fw-bold mt-3">
          Checkout
        </h1>

        <p className="text-muted">
          Enter your details to complete your order.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row g-4">

          {/* CUSTOMER DETAILS */}

          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4 p-md-5">

                <h4 className="fw-bold mb-4">
                  Delivery Information
                </h4>

                {/* NAME */}

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* EMAIL */}

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* PHONE */}

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                {/* ADDRESS */}

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Address
                  </label>

                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-control"
                    rows="3"
                    placeholder="Enter your complete address"
                    required
                  ></textarea>
                </div>

                {/* CITY + STATE */}

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="City"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      State
                    </label>

                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="State"
                      required
                    />
                  </div>

                </div>

                {/* PINCODE */}

                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    PIN Code
                  </label>

                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="PIN Code"
                    required
                  />
                </div>

              </div>
            </div>

            {/* PAYMENT */}

            <div className="card border-0 shadow-sm rounded-4 mt-4">
              <div className="card-body p-4 p-md-5">

                <h4 className="fw-bold mb-4">
                  Payment Method
                </h4>

                {/* CASH ON DELIVERY */}

                <div className="form-check border rounded-3 p-3 mb-3">

                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    checked={
                      formData.payment === "Cash on Delivery"
                    }
                    onChange={handleChange}
                    id="cod"
                  />

                  <label
                    className="form-check-label fw-semibold"
                    htmlFor="cod"
                  >
                    💵 Cash on Delivery
                  </label>

                  <p className="text-muted small ms-4 mb-0">
                    Pay when your order is delivered.
                  </p>

                </div>

              

              </div>
            </div>
          </div>

          {/* ORDER SUMMARY */}

          <div className="col-lg-4">

            <div className="card border-0 shadow-sm rounded-4">

              <div className="card-body p-4">

                <h4 className="fw-bold mb-4">
                  Order Summary
                </h4>

                {/* PRODUCTS */}

                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="d-flex align-items-center mb-3"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />

                    <div className="ms-3 flex-grow-1">

                      <p className="fw-semibold mb-0">
                        {item.name}
                      </p>

                      <small className="text-muted">
                        Qty: {item.quantity}
                      </small>

                    </div>

                    <strong>
                      ₹{item.price * item.quantity}
                    </strong>

                  </div>
                ))}

                <hr />

                {/* SUBTOTAL */}

                <div className="d-flex justify-content-between mb-3">

                  <span className="text-muted">
                    Subtotal
                  </span>

                  <strong>
                    ₹{subtotal}
                  </strong>

                </div>

                {/* DELIVERY */}

                <div className="d-flex justify-content-between mb-3">

                  <span className="text-muted">
                    Delivery
                  </span>

                  <span className="text-success fw-semibold">
                    Free
                  </span>

                </div>

                <hr />

                {/* TOTAL */}

                <div className="d-flex justify-content-between mb-4">

                  <h5 className="fw-bold">
                    Total
                  </h5>

                  <h5 className="fw-bold">
                    ₹{total}
                  </h5>

                </div>

                {/* PLACE ORDER */}

                <button
                  type="submit"
                  className="btn btn-dark btn-lg w-100"
                  disabled={loading}
                >
                  {loading
                    ? "Placing Order..."
                    : "Place Order →"}
                </button>

                <div className="text-center mt-3">

                  <small className="text-muted">
                    🔒 Your information is secure
                  </small>

                </div>

              </div>

            </div>

          </div>

        </div>
      </form>
    </div>
  );
}

export default Checkout;