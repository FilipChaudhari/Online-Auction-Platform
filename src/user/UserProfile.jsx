function UserProfile() {

  return (
    <div>

      <div className="page-title">

        <div>
          <h2>My Profile</h2>
          <p>Manage your bidder account</p>
        </div>

      </div>

      <div className="row g-4">

        <div className="col-lg-4">

          <div className="user-card text-center">

            <i className="bi bi-person-circle profile-icon"></i>

            <h4 className="mt-3">
              Bidder User
            </h4>

            <p className="text-muted">
              bidder@example.com
            </p>

            <span className="badge bg-success">
              Verified Account
            </span>

          </div>

        </div>

        <div className="col-lg-8">

          <div className="user-card">

            <h5>Account Information</h5>

            <div className="mb-3 mt-4">

              <label className="form-label">
                Full Name
              </label>

              <input
                className="form-control"
                defaultValue="Bidder User"
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Email
              </label>

              <input
                className="form-control"
                defaultValue="bidder@example.com"
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Phone
              </label>

              <input
                className="form-control"
                defaultValue="+91 9876543210"
              />

            </div>

            <button className="btn btn-primary">
              Save Changes
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default UserProfile;