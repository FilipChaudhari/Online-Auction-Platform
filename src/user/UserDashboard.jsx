import { Link } from "react-router-dom";

function UserDashboard() {

  return (
    <div>

      <div className="page-title">

        <div>
          <h2>Bidder Dashboard</h2>

          <p>
            Monitor your auctions and bidding activity
          </p>
        </div>

        <Link
          to="/user/auctions"
          className="btn btn-primary"
        >
          <i className="bi bi-search me-2"></i>
          Find Auctions
        </Link>

      </div>

      <div className="row g-4">

        <div className="col-md-6 col-xl-3">

          <div className="user-stat-card">

            <div>
              <p>Active Bids</p>
              <h3>8</h3>
            </div>

            <div className="user-stat-icon bg-primary">
              <i className="bi bi-hammer"></i>
            </div>

          </div>

        </div>

        <div className="col-md-6 col-xl-3">

          <div className="user-stat-card">

            <div>
              <p>Winning Bids</p>
              <h3>3</h3>
            </div>

            <div className="user-stat-icon bg-success">
              <i className="bi bi-trophy"></i>
            </div>

          </div>

        </div>

        <div className="col-md-6 col-xl-3">

          <div className="user-stat-card">

            <div>
              <p>Watchlist</p>
              <h3>12</h3>
            </div>

            <div className="user-stat-icon bg-warning">
              <i className="bi bi-heart"></i>
            </div>

          </div>

        </div>

        <div className="col-md-6 col-xl-3">

          <div className="user-stat-card">

            <div>
              <p>Completed</p>
              <h3>15</h3>
            </div>

            <div className="user-stat-icon bg-info">
              <i className="bi bi-check-circle"></i>
            </div>

          </div>

        </div>

      </div>

      <div className="row g-4 mt-2">

        <div className="col-lg-8">

          <div className="user-card">

            <div className="card-header-custom">

              <h5>My Active Bids</h5>

              <Link to="/user/bid-history">
                View All
              </Link>

            </div>

            <div className="table-responsive">

              <table className="table">

                <thead>

                  <tr>
                    <th>Auction</th>
                    <th>My Bid</th>
                    <th>Current Bid</th>
                    <th>Status</th>
                  </tr>

                </thead>

                <tbody>

                  <tr>

                    <td>iPhone 15 Pro</td>

                    <td>₹70,000</td>

                    <td>₹72,500</td>

                    <td>
                      <span className="badge bg-danger">
                        Outbid
                      </span>
                    </td>

                  </tr>

                  <tr>

                    <td>Gaming Laptop</td>

                    <td>₹82,000</td>

                    <td>₹82,000</td>

                    <td>
                      <span className="badge bg-success">
                        Winning
                      </span>
                    </td>

                  </tr>

                  <tr>

                    <td>DSLR Camera</td>

                    <td>₹44,000</td>

                    <td>₹44,500</td>

                    <td>
                      <span className="badge bg-danger">
                        Outbid
                      </span>
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </div>

        <div className="col-lg-4">

          <div className="user-card">

            <h5>Live Auctions</h5>

            <div className="live-auction-box">

              <span className="live-dot"></span>

              <strong>
                86 Auctions Live
              </strong>

            </div>

            <Link
              to="/user/live-bidding"
              className="btn btn-outline-primary w-100 mt-3"
            >
              Join Live Bidding
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default UserDashboard;