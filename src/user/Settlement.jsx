function Settlement() {

  return (
    <div>

      <div className="page-title">

        <div>
          <h2>Post-Auction Settlement</h2>
          <p>Winner verification and transaction records</p>
        </div>

      </div>

      <div className="user-card">

        <div className="alert alert-success">

          <i className="bi bi-check-circle me-2"></i>

          Auction winner verified successfully.

        </div>

        <div className="row g-4 mt-2">

          <div className="col-md-6">

            <h6>Auction</h6>

            <h5>
              Wireless Keyboard
            </h5>

          </div>

          <div className="col-md-6">

            <h6>Winning Bid</h6>

            <h5 className="text-primary">
              ₹5,500
            </h5>

          </div>

          <div className="col-md-6">

            <h6>Winner</h6>

            <p>
              You
            </p>

          </div>

          <div className="col-md-6">

            <h6>Verification</h6>

            <span className="badge bg-success">
              Verified
            </span>

          </div>

        </div>

        <hr />

        <h5>
          Audit Information
        </h5>

        <div className="audit-box">

          <p>
            <strong>Transaction ID:</strong>{" "}
            TXN-10025
          </p>

          <p>
            <strong>SHA-256:</strong>{" "}
            8d969eef6ecad3c29a3a629280e686cff8fab
          </p>

          <p className="mb-0">
            <strong>Ledger Status:</strong>{" "}
            <span className="text-success">
              Verified
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Settlement;