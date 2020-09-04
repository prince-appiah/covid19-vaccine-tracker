import React from "react";

import "./InfoCardSection.css";
import InfoCard from "../../components/card/Card";

const InfoCardSection = () => {
  return (
    <div className="info-card-section">
      <InfoCard />
      <InfoCard />
    </div>
  );
};

export default InfoCardSection;
