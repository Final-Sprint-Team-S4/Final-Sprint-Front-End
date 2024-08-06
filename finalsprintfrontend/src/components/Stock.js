//Stock.js

import React, { useEffect, useState } from'react';
import { getStocks } from'../apiService';

function Stock() {
const [stocks, setStocks] = useState([]);

  useEffect(() => {
fetchStocks();

  }, []);

  const fetchStocks = async () => {
const response = await getStocks();
setStocks(response.data);
  };
  return (
    <div><h2>Stocks</h2><ul>        {stocks.map(stock => (          <li key={stock.id}>         {stock.id} - {stock.company} - {stock.symbol} - ${stock.price}          </li> ))} </ul></div>
  );
}

export default Stock;
