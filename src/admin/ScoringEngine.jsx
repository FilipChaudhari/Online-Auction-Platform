import { useState } from "react";

function ScoringEngine() {

  const [price, setPrice] = useState(50);
  const [reputation, setReputation] = useState(30);
  const [reliability, setReliability] = useState(20);

  return (
    <div>

      <div className="page-title">
        <div>
          <h2>Multi-Attribute Scoring Engine</h2>
          <p>Configure auction evaluation criteria</p>
        </div>
      </div>

      <div className="dashboard-card">

        <h5>Scoring Weights</h5>

        <div className="mt-4">

          <label className="form-label">
            Price Weight: {price}%
          </label>

          <input
            type="range"
            className="form-range"
            min="0"
            max="100"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

        </div>

        <div className="mt-4">

          <label className="form-label">
            Reputation Weight: {reputation}%
          </label>

          <input
            type="range"
            className="form-range"
            min="0"
            max="100"
            value={reputation}
            onChange={(e) => setReputation(e.target.value)}
          />

        </div>

        <div className="mt-4">

          <label className="form-label">
            Reliability Weight: {reliability}%
          </label>

          <input
            type="range"
            className="form-range"
            min="0"
            max="100"
            value={reliability}
            onChange={(e) => setReliability(e.target.value)}
          />

        </div>

        <div className="alert alert-info mt-4">
          Current total weight:{" "}
          {Number(price) + Number(reputation) + Number(reliability)}%
        </div>

        <button className="btn btn-primary">
          Save Scoring Rules
        </button>

      </div>

    </div>
  );
}

export default ScoringEngine;