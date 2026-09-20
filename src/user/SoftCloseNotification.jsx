function SoftCloseNotification() {

  const notifications = [
    {
      title: "Soft-Close Triggered",
      message:
        "A new bid was placed during the final 30 seconds. Auction extended by 60 seconds.",
      type: "warning"
    },
    {
      title: "You Were Outbid",
      message:
        "Your bid on iPhone 15 Pro has been exceeded.",
      type: "danger"
    },
    {
      title: "Auction Ending Soon",
      message:
        "Gaming Laptop auction will end in 2 minutes.",
      type: "info"
    },
    {
      title: "Auction Won",
      message:
        "Congratulations! You won the Keyboard auction.",
      type: "success"
    }
  ];

  return (
    <div>

      <div className="page-title">

        <div>
          <h2>Notifications</h2>
          <p>Bid and soft-close notifications</p>
        </div>

      </div>

      {notifications.map((notification, index) => (

        <div
          className={`alert alert-${notification.type} d-flex`}
          key={index}
        >

          <i className="bi bi-bell fs-4 me-3"></i>

          <div>

            <strong>
              {notification.title}
            </strong>

            <p className="mb-0">
              {notification.message}
            </p>

          </div>

        </div>

      ))}

    </div>
  );
}

export default SoftCloseNotification;