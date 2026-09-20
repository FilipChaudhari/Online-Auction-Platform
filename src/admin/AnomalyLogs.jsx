function AnomalyLogs() {

  const logs = [
    {
      id: 1,
      auction: "iPhone 15 Pro",
      type: "Rapid Bidding",
      risk: "High",
      time: "10:42 AM"
    },
    {
      id: 2,
      auction: "Gaming Laptop",
      type: "Unusual Price",
      risk: "Medium",
      time: "10:31 AM"
    },
    {
      id: 3,
      auction: "DSLR Camera",
      type: "Multiple Accounts",
      risk: "High",
      time: "09:58 AM"
    }
  ];

  return (
    <div>

      <div className="page-title">
        <div>
          <h2>Anomaly Alert Logs</h2>
          <p>Explainable suspicious activity records</p>
        </div>
      </div>

      <div className="dashboard-card">

        <div className="table-responsive">

          <table className="table">

            <thead>
              <tr>
                <th>Auction</th>
                <th>Anomaly Type</th>
                <th>Risk</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {logs.map((log) => (

                <tr key={log.id}>

                  <td>{log.auction}</td>

                  <td>{log.type}</td>

                  <td>
                    <span
                      className={`badge ${
                        log.risk === "High"
                          ? "bg-danger"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {log.risk}
                    </span>
                  </td>

                  <td>{log.time}</td>

                  <td>
                    <button className="btn btn-sm btn-outline-primary">
                      View Explanation
                    </button>
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

export default AnomalyLogs;