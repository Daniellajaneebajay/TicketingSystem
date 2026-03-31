import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Minutes.css";

function Minutes() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Data passed from Dashboard
  const { hearingNumber, party, claims } = location.state || {
    hearingNumber: "N/A",
    party: "Unknown",
    claims: "None"
  };

  return (
    <div className="minutes-container">
      <div className="minutes-card">
        <div className="minutes-header">
          <button className="back-link" onClick={() => navigate(-1)}>← Back to Dashboard</button>
          <h1 className="minutes-title">Minutes of the Meeting</h1>
          <span className="hearing-badge">{hearingNumber}</span>
        </div>

        <div className="minutes-info-section">
          <div className="info-block">
            <label>Requesting Party</label>
            <p>{party}</p>
          </div>
          <div className="info-block">
            <label>Claims / Issues</label>
            <p>{claims}</p>
          </div>
        </div>

        <div className="minutes-content">
          <label>Meeting Notes</label>
          <textarea placeholder="Record details of the hearing here..." rows="10"></textarea>
        </div>

        <div className="minutes-footer">
          <button className="save-minutes-btn" onClick={() => alert("Minutes Saved!")}>Save Minutes</button>
        </div>
      </div>
    </div>
  );
}

export default Minutes;