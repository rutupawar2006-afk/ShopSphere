import { useEffect, useState } from "react";
import API from "../api";

function AdminProducts() {
  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    stock: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Get products
  const fetchProducts = async () => {
    try {
      const response = await API.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add / Update product
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const productData = {
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock),
      };

      if (editingId) {
        await API.put(`/products/${editingId}`, productData);
        alert("Product updated successfully!");
      } else {
        await API.post("/products", productData);
        alert("Product added successfully!");
      }

      resetForm();
      fetchProducts();
    } catch (error) {
      console.error("Product operation failed:", error);
      alert(
        error.response?.data?.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  // Edit
  const handleEdit = (product) => {
    setEditingId(product._id);

    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      image: product.image,
      stock: product.stock,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Delete
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/products/${id}`);

      alert("Product deleted successfully!");

      fetchProducts();
    } catch (error) {
      console.error("Delete failed:", error);
      alert(
        error.response?.data?.message ||
          "Failed to delete product."
      );
    }
  };

  // Reset
  const resetForm = () => {
    setEditingId(null);

    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      image: "",
      stock: "",
    });
  };

  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold">
          Product Management
        </h2>

        <p className="text-muted">
          Add, update and delete ShopSphere products
        </p>
      </div>

      {/* Product Form */}
      <div className="card shadow-sm border-0 mb-5">
        <div className="card-body p-4">

          <h4 className="mb-4">
            {editingId ? "Edit Product" : "Add New Product"}
          </h4>

          <form onSubmit={handleSubmit}>

            <div className="row g-3">

              <div className="col-md-6">
                <label className="form-label">
                  Product Name
                </label>

                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">
                  Category
                </label>

                <input
                  type="text"
                  name="category"
                  className="form-control"
                  value={formData.category}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">
                  Price
                </label>

                <input
                  type="number"
                  name="price"
                  className="form-control"
                  value={formData.price}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">
                  Stock
                </label>

                <input
                  type="number"
                  name="stock"
                  className="form-control"
                  value={formData.stock}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">
                  Image URL
                </label>

                <input
                  type="text"
                  name="image"
                  className="form-control"
                  value={formData.image}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12">
                <label className="form-label">
                  Description
                </label>

                <textarea
                  name="description"
                  className="form-control"
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="col-12">

                <button
                  type="submit"
                  className="btn btn-dark me-2"
                  disabled={loading}
                >
                  {loading
                    ? "Saving..."
                    : editingId
                    ? "Update Product"
                    : "Add Product"}
                </button>

                {editingId && (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={resetForm}
                  >
                    Cancel
                  </button>
                )}

              </div>

            </div>

          </form>
        </div>
      </div>

      {/* Product List */}
      <div className="card shadow-sm border-0">

        <div className="card-body p-4">

          <h4 className="mb-4">
            All Products ({products.length})
          </h4>

          <div className="table-responsive">

            <table className="table table-hover align-middle">

              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                {products.map((product) => (
                  <tr key={product._id}>

                    <td>
                      <img
                        src={product.image}
                        alt={product.name}
                        width="60"
                        height="60"
                        style={{
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    </td>

                    <td className="fw-semibold">
                      {product.name}
                    </td>

                    <td>
                      {product.category}
                    </td>

                    <td>
                      ₹{product.price}
                    </td>

                    <td>
                      {product.stock}
                    </td>

                    <td>
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => handleEdit(product)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() =>
                          handleDelete(product._id)
                        }
                      >
                        Delete
                      </button>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminProducts;