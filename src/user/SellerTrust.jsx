function SellerTrust() {

  const sellers = [
    {
      name: "Tech Store",
      rating: "4.8",
      reputation: "95%",
      reliability: "98%"
    },
    {
      name: "Digital World",
      rating: "4.6",
      reputation: "91%",
      reliability: "94%"
    },
    {
      name: "Camera Hub",
      rating: "4.1",
      reputation: "72%",
      reliability: "79%"
    }
  ];

  return (
    <div>

      <div className="page-title">

        <div>
          <h2>Seller Trust Metrics</h2>
          <p>Evaluate seller reputation and reliability</p>
        </div>

      </div>

      <div className="row g-4">

        {sellers.map((seller, index) => (

          <div
            className="col-md-6 col-xl-4"
            key={index}
          >

            <div className="user-card">

              <div className="text-center">

                <i className="bi bi-shop display-5 text-primary"></i>

                <h5 className="mt-3">
                  {seller.name}
                </h5>

                <div className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star"></i>
                </div>

                <strong>
                  {seller.rating} / 5
                </strong>

              </div>

              <hr />

              <div className="trust-row">
                <span>Reputation</span>
                <strong>{seller.reputation}</strong>
              </div>

              <div className="trust-row">
                <span>Reliability</span>
                <strong>{seller.reliability}</strong>
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default SellerTrust;