import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="hero-copy">
            <span className="hero-badge">Trusted Digital Auction Engine</span>
            <h1>Real-Time Auction Platform</h1>
            <p>
              Smart, secure and responsive auction management built for
              live bidding, fraud prevention, and better seller performance.
            </p>

            <div className="hero-actions">
              <Link to="/register" className="primary-btn">
                Get Started
              </Link>
              <Link to="/login" className="secondary-btn">
                Sign In
              </Link>
            </div>

            <div className="hero-stats">
              <div>
                <strong>12K+</strong>
                <span>Live bids</span>
              </div>
              <div>
                <strong>98.4%</strong>
                <span>Platform trust</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Market watch</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="mini-card top-card">
              <span className="label">Active Auction</span>
              <h3>Luxury Watch Drop</h3>
              <div className="auction-row">
                <strong>$8,450</strong>
                <span>Live</span>
              </div>
            </div>

            <div className="mini-card">
              <span className="label">Risk Score</span>
              <div className="score-row">
                <strong>Low</strong>
                <span>92/100</span>
              </div>
            </div>

            <div className="mini-card chart-card">
              <span className="label">Performance</span>
              <div className="chart-bars">
                <span style={{ height: "30%" }}></span>
                <span style={{ height: "55%" }}></span>
                <span style={{ height: "72%" }}></span>
                <span style={{ height: "88%" }}></span>
                <span style={{ height: "100%" }}></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-features">
        <div className="section-heading">
          <span>Platform Features</span>
          <h2>Everything needed to run a fair, fast auction</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <i className="bi bi-lightning-charge"></i>
            <h4>Real-Time Bidding</h4>
            <p>Track live auctions and competitor activity instantly.</p>
          </div>

          <div className="feature-card">
            <i className="bi bi-shield-check"></i>
            <h4>Secure Platform</h4>
            <p>Protect auctions with monitoring, fraud checks, and trust alerts.</p>
          </div>

          <div className="feature-card">
            <i className="bi bi-graph-up"></i>
            <h4>Smart Analytics</h4>
            <p>Analyze seller health, user behavior, and auction performance.</p>
          </div>
        </div>
      </section>

      <section className="home-showcase">
        <div className="showcase-copy">
          <span className="eyebrow">Why Choose Us</span>
          <h2>Built to feel premium and perform at scale</h2>
          <ul>
            <li>Live auction orchestration for buyers and sellers</li>
            <li>Fraud and anomaly detection with transparent reporting</li>
            <li>Modern interface that matches the login and registration flow</li>
          </ul>
        </div>

        <div className="showcase-panel">
          <div className="panel-row">
            <span>Active Auctions</span>
            <strong>184</strong>
          </div>
          <div className="panel-row">
            <span>Sellers Verified</span>
            <strong>96%</strong>
          </div>
          <div className="panel-row">
            <span>Bid Success</span>
            <strong>82%</strong>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;