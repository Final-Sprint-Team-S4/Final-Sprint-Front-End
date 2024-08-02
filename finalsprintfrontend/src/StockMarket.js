// StockMarket.js

import React, { useEffect, useState } from 'react';
import { getStockMarkets } from './apiService';
 
function StockMarket() {
  const [stockMarkets, setStockMarkets] = useState([]);
 
  useEffect(() => {
    fetchStockMarkets();
  }, []);
 
  const fetchStockMarkets = async () => {
    const response = await getStockMarkets();
    setStockMarkets(response.data);
  };
 
  return (
    <div><h2>Stock Markets</h2><ul>        {stockMarkets.map(market => (          <li key={market.id}>            {market.name} - {market.location}          </li> ))} </ul></div>
  );
  
}
export default StockMarket;
 
