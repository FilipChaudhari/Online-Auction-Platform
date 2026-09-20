function LedgerAudit() {

  const records = [
    {
      block: "#10025",
      transaction: "Auction Winner",
      hash: "A91F...7C21",
      status: "Verified"
    },
    {
      block: "#10024",
      transaction: "Bid Recorded",
      hash: "B82D...4F19",
      status: "Verified"
    },
    {
      block: "#10023",
      transaction: "Auction Created",
      hash: "C73A...8D11",
      status: "Verified"
    }
  ];

  return (
    <div>

      <div className="page-title">
        <div>
          <h2>Ledger & Audit Manager</h2>
          <p>SHA-256 transaction audit records</p>
        </div>

        <button className="btn btn-primary">
          <i className="bi bi-download me-2"></i>
          Export Audit
        </button>
      </div>

      <div className="dashboard-card mb-4">

        <div className="row">

          <div className="col-md-4">
            <h6>Total Blocks</h6>
            <h3>10,025</h3>
          </div>

          <div className="col-md-4">
            <h6>Verified Records</h6>
            <h3 className="text-success">10,025</h3>
          </div>

          <div className="col-md-4">
            <h6>Ledger Status</h6>
            <h3 className="text-success">
              Secure
            </h3>
          </div>

        </div>

      </div>

      <div className="dashboard-card">

        <div className="table-responsive">

          <table className="table">

            <thead>
              <tr>
                <th>Block</th>
                <th>Transaction</th>
                <th>SHA-256 Hash</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {records.map((record) => (

                <tr key={record.block}>

                  <td>{record.block}</td>

                  <td>{record.transaction}</td>

                  <td>
                    <code>{record.hash}</code>
                  </td>

                  <td>
                    <span className="badge bg-success">
                      <i className="bi bi-check-circle me-1"></i>
                      {record.status}
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

export default LedgerAudit;