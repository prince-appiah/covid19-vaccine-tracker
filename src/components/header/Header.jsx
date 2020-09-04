import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <AppBar position="sticky">
        <Toolbar variant="regular">
          <h1>Covid-19 Vaccine Tracker</h1>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
