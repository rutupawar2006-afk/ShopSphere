import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsLoggedIn(false);

    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid px-4">

        <Link
          className="navbar-brand fw-bold"
          to="/"
        >
          ShopSphere
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">

            {/* Home */}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
              >
                Home
              </Link>
            </li>

            {/* Products */}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/products"
              >
                Products
              </Link>
            </li>

            {/* Cart */}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/cart"
              >
                Cart 🛒
              </Link>
            </li>

            {isLoggedIn ? (
              <>
                {/* My Orders */}
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/orders"
                  >
                    My Orders 📦
                  </Link>
                </li>

                {/* Logout */}
                <li className="nav-item">
                  <button
                    className="btn btn-link nav-link"
                    onClick={handleLogout}
                    style={{
                      border: "none",
                      background: "none",
                    }}
                  >
                    Logout 🚪
                  </button>
                </li>
              </>
            ) : (
              /* Login */
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;