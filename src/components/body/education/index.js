import React from "react";
import "./education.css";
import Separator from "../../common/separator";
import {EducationData} from "../../data/education";
import EducationCard from "./education-card";
function Education() {
  const data = EducationData;
  return (
    <div className="education">
      <Separator />
      <label className="section-title">Education</label>
      <div className="work-list">
        {data.map((item) => {
          return <EducationCard item={item} />;
        })}
      </div>
    </div>
  );  
}

export default Education;