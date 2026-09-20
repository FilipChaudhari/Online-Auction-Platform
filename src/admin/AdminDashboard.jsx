function AdminDashboard() {
  const cards = [
    {
      title: "Total Users",
      value: "12,580",
      icon: "bi-people",
      color: "primary"
    },
    {
      title: "Active Sellers",
      value: "1,245",
      icon: "bi-shop",
      color: "success"
    },
    {
      title: "Live Auctions",
      value: "86",
      icon: "bi-broadcast",
      color: "warning"
    },
    {
      title: "Fraud Alerts",
      value: "17",
      icon: "bi-shield-exclamation",
      color: "danger"
    }
  ];

  return (
    <div>

      <div className="page-title">
        <div>
          <h2>Dashboard</h2>
          <p>Platform overview and real-time statistics</p>
        </div>
      </div>

      <div className="row g-4">

        {cards.map((card, index) => (
          <div className="col-md-6 col-xl-3" key={index}>

            <div className="stat-card">

              <div>
                <p>{card.title}</p>
                <h3>{card.value}</h3>
              </div>

              <div className={`stat-icon bg-${card.color}`}>
                <i className={`bi ${card.icon}`}></i>
              </div>

            </div>

          </div>
        ))}

      </div>

      <div className="row g-4 mt-2">

        <div className="col-lg-8">

          <div className="dashboard-card">

            <div className="card-header-custom">
              <h5>Recent Auctions</h5>
              <span className="badge bg-success">Live</span>
            </div>

            <div className="table-responsive">

              <table className="table align-middle">

                <thead>
                  <tr>
                    <th>Auction</th>
                    <th>Seller</th>
                    <th>Bids</th>
                    <th>Current Price</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>iPhone 15 Pro</td>
                    <td>Tech Store</td>
                    <td>42</td>
                    <td>₹72,500</td>
                    <td>
                      <span className="badge bg-success">Live</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Gaming Laptop</td>
                    <td>Digital World</td>
                    <td>31</td>
                    <td>₹85,000</td>
                    <td>
                      <span className="badge bg-success">Live</span>
                    </td>
                  </tr>

                  <tr>
                    <td>DSLR Camera</td>
                    <td>Camera Hub</td>
                    <td>19</td>
                    <td>₹45,200</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        Ending
                      </span>
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </div>

        <div className="col-lg-4">

          <div className="dashboard-card">

            <h5>System Status</h5>

            <div className="status-row">
              <span>WebSocket Engine</span>
              <span className="text-success">
                ● Online
              </span>
            </div>

            <div className="status-row">
              <span>Fraud Detection</span>
              <span className="text-success">
                ● Active
              </span>
            </div>

            <div className="status-row">
              <span>Audit Ledger</span>
              <span className="text-success">
                ● Secure
              </span>
            </div>

            <div className="status-row">
              <span>API Server</span>
              <span className="text-success">
                ● Online
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;