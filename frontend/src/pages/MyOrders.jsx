import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await API.get("/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <h3>Loading Orders...</h3>
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
      <div className="mb-5">
        <span className="hero-badge">
          📦 Order History
        </span>

        <h1 className="fw-bold mt-3">
          My Orders
        </h1>

        <p className="text-muted">
          View your previous ShopSphere orders.
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="card border-0 shadow-sm rounded-4">
          <div className="card-body text-center py-5">
            <div style={{ fontSize: "60px" }}>📦</div>

            <h3 className="fw-bold mt-3">
              No Orders Yet
            </h3>

            <p className="text-muted">
              You haven't placed any orders yet.
            </p>

            <Link
              to="/products"
              className="btn btn-dark mt-3"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          {orders.map((order) => (
            <div
              className="col-12"
              key={order._id}
            >
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body p-4">

                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">

                    <div>
                      <h5 className="fw-bold mb-1">
                        Order #{order._id.slice(-8)}
                      </h5>

                      <small className="text-muted">
                        {new Date(order.createdAt).toLocaleString()}
                      </small>
                    </div>

                    <span className="badge bg-warning text-dark px-3 py-2">
                      {order.orderStatus}
                    </span>

                  </div>

                  <div className="row g-3">

                    <div className="col-lg-8">
                      {order.products.map((product, index) => (
                        <div
                          key={product.productId?._id || index}
                          className="d-flex align-items-center border-bottom py-3"
                        >
                          <div className="flex-grow-1">
                            <h6 className="fw-semibold mb-1">
                              {product.name}
                            </h6>

                            <small className="text-muted">
                              Quantity: {product.quantity}
                            </small>
                          </div>

                          <strong>
                            ₹{product.price * product.quantity}
                          </strong>
                        </div>
                      ))}
                    </div>

                    <div className="col-lg-4">

                      <div className="bg-light rounded-3 p-3">

                        <div className="d-flex justify-content-between mb-2">
                          <span>Payment</span>
                          <strong>
                            {order.paymentMethod}
                          </strong>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between">
                          <span className="fw-bold">
                            Total
                          </span>

                          <strong className="fs-5">
                            ₹{order.totalAmount}
                          </strong>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyOrders;