import React from "react";
import { Card, CardContent } from "@material-ui/core";

import "./Card.css";

const InfoCard = () => {
  return (
    <div className="card">
      <Card className="main-card">
        <CardContent className="main-card-content">
          <div className="main-card-header">
            <h3>Total Number of candidates</h3>
          </div>
          <div className="main-card-body">
            <h1>23</h1>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoCard;
