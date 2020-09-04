import React from "react";

import "./app.css";
import Header from "./components/header/Header";
import InfoCardSection from "./containers/info_card_section/InfoCardSection";

function App() {
  return (
    <div className="app">
      <Header />
      {/* Cards Component */}
      <InfoCardSection/>
    </div>
  );
}

export default App;
