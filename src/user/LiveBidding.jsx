import { useState } from "react";

function LiveBidding() {

  const [bid, setBid] = useState(73000);

  const [currentBid, setCurrentBid] = useState(72500);

  const [bids, setBids] = useState([
    {
      user: "Bidder A",
      amount: "₹72,500",
      time: "10 sec ago"
    },
    {
      user: "Bidder B",
      amount: "₹71,500",
      time: "25 sec ago"
    },
    {
      user: "Bidder C",
      amount: "₹70,500",
      time: "42 sec ago"
    }
  ]);

  const placeBid = () => {

    if (Number(bid) <= currentBid) {
      alert(
        "Your bid must be higher than the current bid."
      );
      return;
    }

    setCurrentBid(Number(bid));

    setBids([
      {
        user: "You",
        amount: `₹${Number(bid).toLocaleString()}`,
        time: "Just now"
      },
      ...bids
    ]);

    alert("Bid placed successfully!");
  };

  return (
    <div>

      <div className="page-title">

        <div>
          <h2>Live Bidding Console</h2>

          <p>
            Real-time auction bidding
          </p>
        </div>

        <span className="badge bg-success fs-6">
          <span className="live-dot"></span>
          LIVE
        </span>

      </div>

      <div className="row g-4">

        <div className="col-lg-8">

          <div className="user-card">

            <div className="d-flex justify-content-between">

              <div>

                <h3>
                  iPhone 15 Pro
                </h3>

                <p className="text-muted">
                  Seller: Tech Store
                </p>

              </div>

              <div className="text-end">

                <small>
                  Time Remaining
                </small>

                <h4 className="text-danger">
                  12:30
                </h4>

              </div>

            </div>

            <hr />

            <div className="current-bid-box">

              <small>
                Current Highest Bid
              </small>

              <h1>
                ₹{currentBid.toLocaleString()}
              </h1>

              <span>
                42 total bids
              </span>

            </div>

            <div className="row mt-4">

              <div className="col-md-8">

                <label className="form-label">
                  Enter Your Bid
                </label>

                <input
                  type="number"
                  className="form-control form-control-lg"
                  value={bid}
                  onChange={(e) =>
                    setBid(e.target.value)
                  }
                />

              </div>

              <div className="col-md-4 d-flex align-items-end">

                <button
                  className="btn btn-primary btn-lg w-100"
                  onClick={placeBid}
                >
                  <i className="bi bi-hammer me-2"></i>
                  Place Bid
                </button>

              </div>

            </div>

            <div className="alert alert-warning mt-4">

              <i className="bi bi-info-circle me-2"></i>

              Minimum bid should be higher than the
              current highest bid.

            </div>

          </div>

        </div>

        <div className="col-lg-4">

          <div className="user-card">

            <div className="card-header-custom">

              <h5>Live Bid Feed</h5>

              <span className="badge bg-success">
                Real-Time
              </span>

            </div>

            {bids.map((item, index) => (

              <div
                className="bid-feed"
                key={index}
              >

                <div>

                  <strong>
                    {item.user}
                  </strong>

                  <small>
                    {item.time}
                  </small>

                </div>

                <strong>
                  {item.amount}
                </strong>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default LiveBidding;