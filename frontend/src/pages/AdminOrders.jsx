import { useEffect, useState } from "react";
import API from "../api";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await API.get("/orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (orderId, status) => {
    try {
      await API.put(`/orders/${orderId}/status`, {
        status,
      });

      alert("Order status updated!");

      fetchOrders();
    } catch (error) {
      console.error("Status update failed:", error);
      alert(
        error.response?.data?.message ||
          "Failed to update status."
      );
    }
  };

  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold">Order Management</h2>
        <p className="text-muted">
          Manage customer orders and their status
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-5">
          <h4>No orders found</h4>
        </div>
      ) : (
        <div className="row g-4">

          {orders.map((order) => (
            <div className="col-lg-6" key={order._id}>

              <div className="card border-0 shadow-sm h-100">

                <div className="card-body p-4">

                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="fw-bold">
                      Order #{order._id.slice(-6)}
                    </h5>

                    <span className="badge bg-secondary">
                      {order.orderStatus}
                    </span>
                  </div>

                  <p className="mb-1">
                    <strong>Customer:</strong>{" "}
                    {order.customer.name}
                  </p>

                  <p className="mb-1">
                    <strong>Email:</strong>{" "}
                    {order.customer.email}
                  </p>

                  <p className="mb-3">
                    <strong>Payment:</strong>{" "}
                    {order.paymentMethod}
                  </p>

                  <hr />

                  <h6 className="fw-bold">Products</h6>

                  {order.products.map((product, index) => (
                    <div
                      key={index}
                      className="d-flex justify-content-between"
                    >
                      <span>
                        {product.name} × {product.quantity}
                      </span>

                      <span>
                        ₹{product.price * product.quantity}
                      </span>
                    </div>
                  ))}

                  <hr />

                  <div className="d-flex justify-content-between mb-3">
                    <strong>Total</strong>
                    <strong>₹{order.totalAmount}</strong>
                  </div>

                  <label className="form-label fw-semibold">
                    Update Status
                  </label>

                  <select
                    className="form-select"
                    value={order.orderStatus}
                    onChange={(e) =>
                      updateStatus(
                        order._id,
                        e.target.value
                      )
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default AdminOrders;