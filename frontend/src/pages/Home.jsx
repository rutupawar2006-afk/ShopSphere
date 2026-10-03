import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* HERO */}

      <section className="hero-section">

        <div className="container-fluid px-4 px-md-5">

          <div className="row align-items-center">

            <div className="col-lg-6 hero-content">

              <span className="hero-badge">
                ✨ Welcome to ShopSphere
              </span>

              <h1 className="hero-title">
                Shop Smart.
                <br />
                Shop <span>Better.</span>
              </h1>

              <p className="hero-description">
                Discover electronics, fashion, home essentials
                and more — all in one beautiful shopping experience.
              </p>

              <Link
                to="/products"
                className="btn btn-dark btn-lg"
              >
                Shop Now →
              </Link>

            </div>

            <div className="col-lg-6 text-center mt-5 mt-lg-0">

              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
                alt="Shopping"
                className="img-fluid hero-image"
              />

            </div>

          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section className="py-5">

        <div className="container-fluid px-4 px-md-5">

          <div className="text-center mb-5">

            <h2 className="section-title">
              Why Shop With Us?
            </h2>

            <p className="section-subtitle">
              Everything you need for a simple and enjoyable shopping experience.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-md-4">

              <div className="card feature-card h-100">

                <div className="card-body text-center p-4">

                  <div className="feature-icon">
                    🚚
                  </div>

                  <h4 className="fw-bold">
                    Fast Delivery
                  </h4>

                  <p className="text-muted">
                    Get your products delivered quickly and safely.
                  </p>

                </div>

              </div>

            </div>


            <div className="col-md-4">

              <div className="card feature-card h-100">

                <div className="card-body text-center p-4">

                  <div className="feature-icon">
                    🔒
                  </div>

                  <h4 className="fw-bold">
                    Secure Shopping
                  </h4>

                  <p className="text-muted">
                    Enjoy a secure and reliable shopping experience.
                  </p>

                </div>

              </div>

            </div>


            <div className="col-md-4">

              <div className="card feature-card h-100">

                <div className="card-body text-center p-4">

                  <div className="feature-icon">
                    ⭐
                  </div>

                  <h4 className="fw-bold">
                    Quality Products
                  </h4>

                  <p className="text-muted">
                    Explore useful products across different categories.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;