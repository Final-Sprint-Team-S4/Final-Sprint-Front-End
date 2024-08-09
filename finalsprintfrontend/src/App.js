//App
import React from "react";
import "./App.css";
import Buyers from "./components/Buyers";
import Stock from "./components/Stock";
import StockMarket from "./components/StockMarket";
import StockSearch from "./components/StockSearch";

function App() {
  return (
    <div className="App">
      <h1>Final Sprint Project</h1>
      <Buyers />
      <Stock />
      <StockMarket />
      <StockSearch />
    </div>
  );
}

export default App;
