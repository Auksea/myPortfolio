import React from "react";
import "./education-card.css";
function WorkCard ({ item }) {
  return (
    <div className="education-card">
      <img src={item.companyLogo}className="education-logo" />
      <div className="education-info">
        <label className="company-name">{item.company}</label>
        <div className="work-dates">
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;