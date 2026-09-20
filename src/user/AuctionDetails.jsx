import { useParams, Link } from "react-router-dom";

function AuctionDetails() {

  const { id } = useParams();

  return (
    <div>

      <div className="page-title">

        <div>
          <h2>iPhone 15 Pro</h2>

          <p>
            Auction ID: #{id}
          </p>
        </div>

        <Link
          to="/user/auctions"
          className="btn btn-outline-secondary"
        >
          Back to Auctions
        </Link>

      </div>

      <div className="row g-4">

        <div className="col-lg-7">

          <div className="user-card">

            <div className="product-placeholder">

              <i className="bi bi-phone"></i>

            </div>

          </div>

        </div>

        <div className="col-lg-5">

          <div className="user-card">

            <span className="badge bg-success mb-3">
              LIVE AUCTION
            </span>

            <h3>iPhone 15 Pro</h3>

            <p className="text-muted">
              256GB Storage | Excellent Condition
            </p>

            <hr />

            <small>
              Current Highest Bid
            </small>

            <h2 className="text-primary">
              ₹72,500
            </h2>

            <p>
              Total Bids: <strong>42</strong>
            </p>

            <p>
              Time Remaining:{" "}
              <strong className="text-danger">
                12m 30s
              </strong>
            </p>

            <Link
              to="/user/live-bidding"
              className="btn btn-primary w-100 mt-3"
            >
              <i className="bi bi-hammer me-2"></i>
              Enter Live Bidding
            </Link>

            <button className="btn btn-outline-danger w-100 mt-2">
              <i className="bi bi-heart me-2"></i>
              Add to Watchlist
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AuctionDetails;