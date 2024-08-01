// StockMarket.js

import React, { useEffect, useState } from 'react';
 
function StockMarket() {
  const [stockMarkets, setStockMarkets] = useState([]);
 
  useEffect(() => {
    fetchStockMarkets();
  }, []);
 
  constfetchStockMarkets = async () => {
    const response = awaitgetStockMarkets();
    setStockMarkets(response.data);
  };
 
  return (
    <div><h2>Stock Markets</h2><ul>        {stockMarkets.map(market => (          <li key={market.id}>            {market.name} - {market.location}          </li> ))} </ul></div>
  );
}
 
exportdefaultStockMarket;