function Watchlist() {

  const auctions = [
    {
      name: "Gaming Laptop",
      price: "₹85,000",
      time: "25m"
    },
    {
      name: "DSLR Camera",
      price: "₹45,200",
      time: "42m"
    },
    {
      name: "Smart Watch",
      price: "₹12,500",
      time: "1h"
    }
  ];

  return (
    <div>

      <div className="page-title">

        <div>
          <h2>My Watchlist</h2>
          <p>Auctions you are monitoring</p>
        </div>

      </div>

      <div className="row g-4">

        {auctions.map((auction, index) => (

          <div className="col-md-6 col-xl-4" key={index}>

            <div className="user-card">

              <div className="d-flex justify-content-between">

                <h5>
                  {auction.name}
                </h5>

                <i className="bi bi-heart-fill text-danger"></i>

              </div>

              <hr />

              <small>
                Current Bid
              </small>

              <h3 className="text-primary">
                {auction.price}
              </h3>

              <p>
                <i className="bi bi-clock"></i>{" "}
                Ends in {auction.time}
              </p>

              <button className="btn btn-primary w-100">
                View Auction
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Watchlist;