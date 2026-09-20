import { Link } from "react-router-dom";

function AuctionCatalog() {

  const auctions = [
    {
      id: 1,
      title: "iPhone 15 Pro",
      category: "Electronics",
      price: "₹72,500",
      bids: 42,
      time: "12m 30s"
    },
    {
      id: 2,
      title: "Gaming Laptop",
      category: "Computers",
      price: "₹85,000",
      bids: 31,
      time: "25m 10s"
    },
    {
      id: 3,
      title: "DSLR Camera",
      category: "Camera",
      price: "₹45,200",
      bids: 19,
      time: "42m 20s"
    },
    {
      id: 4,
      title: "Smart Watch",
      category: "Accessories",
      price: "₹12,500",
      bids: 15,
      time: "1h 10m"
    }
  ];

  return (
    <div>

      <div className="page-title">

        <div>
          <h2>Auction Catalog</h2>

          <p>
            Discover and participate in live auctions
          </p>
        </div>

      </div>

      <div className="row mb-4">

        <div className="col-md-8">

          <input
            type="text"
            className="form-control"
            placeholder="Search auctions..."
          />

        </div>

        <div className="col-md-4">

          <select className="form-select">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Computers</option>
            <option>Camera</option>
            <option>Accessories</option>
          </select>

        </div>

      </div>

      <div className="row g-4">

        {auctions.map((auction) => (

          <div
            className="col-md-6 col-xl-4"
            key={auction.id}
          >

            <div className="auction-card">

              <div className="auction-image">

                <i className="bi bi-image"></i>

                <span className="auction-live">
                  LIVE
                </span>

              </div>

              <div className="auction-body">

                <small className="text-muted">
                  {auction.category}
                </small>

                <h5 className="mt-1">
                  {auction.title}
                </h5>

                <div className="auction-info">

                  <div>
                    <small>Current Bid</small>
                    <strong>{auction.price}</strong>
                  </div>

                  <div>
                    <small>Bids</small>
                    <strong>{auction.bids}</strong>
                  </div>

                </div>

                <div className="auction-time">
                  <i className="bi bi-clock me-1"></i>
                  Ends in {auction.time}
                </div>

                <Link
                  to={`/user/auction/${auction.id}`}
                  className="btn btn-primary w-100 mt-3"
                >
                  View Auction
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AuctionCatalog;