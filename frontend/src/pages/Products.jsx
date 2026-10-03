import { useEffect, useState } from "react";
import API from "../api";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await API.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="products-page">
      <div className="container">

        <div className="text-center mb-4">
          <h2 className="section-title">Explore Products</h2>
          <p className="section-subtitle">
            Find the products you are looking for
          </p>
        </div>

        {/* Search and Filters */}
        <div className="row g-3 mb-5">

          <div className="col-md-5">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="🔍 Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <select
              className="form-select form-select-lg"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-3">
            <select
              className="form-select form-select-lg"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>

          <div className="col-md-1">
            <button
              className="btn btn-dark btn-lg w-100"
              onClick={() => {
                setSearch("");
                setCategory("All");
                setSort("");
              }}
            >
              ↻
            </button>
          </div>

        </div>

        {/* Product Count */}
        <p className="text-muted mb-4">
          Showing <strong>{filteredProducts.length}</strong> products
        </p>

        {/* Products */}
        <div className="row g-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))
          ) : (
            <div className="text-center py-5">
              <h4>No products found</h4>
              <p className="text-muted">
                Try another search or category.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Products;