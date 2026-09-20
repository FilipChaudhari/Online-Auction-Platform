function SellerManagement() {

  const sellers = [
    {
      id: 101,
      name: "Tech Store",
      auctions: 45,
      rating: 4.8,
      trust: 95,
      status: "Verified"
    },
    {
      id: 102,
      name: "Digital World",
      auctions: 32,
      rating: 4.6,
      trust: 91,
      status: "Verified"
    },
    {
      id: 103,
      name: "Camera Hub",
      auctions: 18,
      rating: 4.1,
      trust: 72,
      status: "Review"
    }
  ];

  return (
    <div>

      <div className="page-title">
        <div>
          <h2>Seller Management</h2>
          <p>Manage seller accounts and trust metrics</p>
        </div>

        <button className="btn btn-primary">
          <i className="bi bi-shop me-2"></i>
          Add Seller
        </button>
      </div>

      <div className="dashboard-card">

        <div className="table-responsive">

          <table className="table align-middle">

            <thead>
              <tr>
                <th>Seller</th>
                <th>Auctions</th>
                <th>Rating</th>
                <th>Trust Score</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {sellers.map((seller) => (

                <tr key={seller.id}>

                  <td>
                    <strong>{seller.name}</strong>
                  </td>

                  <td>{seller.auctions}</td>

                  <td>
                    <i className="bi bi-star-fill text-warning"></i>{" "}
                    {seller.rating}
                  </td>

                  <td>{seller.trust}%</td>

                  <td>
                    <span
                      className={`badge ${
                        seller.status === "Verified"
                          ? "bg-success"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {seller.status}
                    </span>
                  </td>

                  <td>
                    <button className="btn btn-sm btn-outline-primary">
                      View
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

export default SellerManagement;