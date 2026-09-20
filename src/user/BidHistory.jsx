function BidHistory() {

  const history = [
    {
      auction: "iPhone 15 Pro",
      bid: "₹70,000",
      current: "₹72,500",
      status: "Outbid"
    },
    {
      auction: "Gaming Laptop",
      bid: "₹82,000",
      current: "₹82,000",
      status: "Winning"
    },
    {
      auction: "Keyboard",
      bid: "₹5,500",
      current: "₹5,500",
      status: "Won"
    },
    {
      auction: "DSLR Camera",
      bid: "₹44,000",
      current: "₹45,200",
      status: "Outbid"
    }
  ];

  return (
    <div>

      <div className="page-title">

        <div>
          <h2>Bid History</h2>
          <p>Your complete bidding activity</p>
        </div>

      </div>

      <div className="user-card">

        <div className="table-responsive">

          <table className="table">

            <thead>

              <tr>
                <th>Auction</th>
                <th>Your Bid</th>
                <th>Current Bid</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              {history.map((item, index) => (

                <tr key={index}>

                  <td>
                    {item.auction}
                  </td>

                  <td>
                    {item.bid}
                  </td>

                  <td>
                    {item.current}
                  </td>

                  <td>

                    <span
                      className={`badge ${
                        item.status === "Winning" ||
                        item.status === "Won"
                          ? "bg-success"
                          : "bg-danger"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default BidHistory;