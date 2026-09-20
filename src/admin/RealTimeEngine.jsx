function RealTimeEngine() {

  return (
    <div>

      <div className="page-title">
        <div>
          <h2>Real-Time Engine Management</h2>
          <p>Monitor WebSocket connections and system latency</p>
        </div>
      </div>

      <div className="row g-4">

        <div className="col-md-4">
          <div className="dashboard-card text-center">
            <i className="bi bi-broadcast display-5 text-success"></i>
            <h3 className="mt-3">1,248</h3>
            <p>Active Connections</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="dashboard-card text-center">
            <i className="bi bi-speedometer2 display-5 text-primary"></i>
            <h3 className="mt-3">24 ms</h3>
            <p>Average Latency</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="dashboard-card text-center">
            <i className="bi bi-lightning display-5 text-warning"></i>
            <h3 className="mt-3">99.98%</h3>
            <p>Engine Availability</p>
          </div>
        </div>

      </div>

      <div className="dashboard-card mt-4">

        <h5>WebSocket Engine Status</h5>

        <div className="alert alert-success mt-3">
          <i className="bi bi-check-circle me-2"></i>
          WebSocket real-time engine is operating normally.
        </div>

        <div className="status-row">
          <span>Connection Status</span>
          <strong className="text-success">Connected</strong>
        </div>

        <div className="status-row">
          <span>Message Queue</span>
          <strong>126 messages</strong>
        </div>

        <div className="status-row">
          <span>Events / Second</span>
          <strong>384</strong>
        </div>

      </div>

    </div>
  );
}

export default RealTimeEngine;