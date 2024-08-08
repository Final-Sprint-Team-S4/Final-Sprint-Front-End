import React, { useEffect, useState } from "react";
import {
  createBuyer,
  deleteBuyer,
  getBuyers,
  updateBuyer,
} from "../apiService";

function Buyers() {
  const [buyers, setBuyers] = useState([]);
  const [newBuyer, setNewBuyer] = useState({ name: "", stocks: [] });
  const [stockSymbol, setStockSymbol] = useState("");
  const [stockCompany, setStockCompany] = useState("");
  const [stockPrice, setStockPrice] = useState("");

  useEffect(() => {
    fetchBuyers();
  }, []);

  const fetchBuyers = async () => {
    const response = await getBuyers();
    console.log(response)
    console.log(response);
    setBuyers(response.data);
  };

  const handleCreateBuyer = async () => {
    await createBuyer(newBuyer);
    setNewBuyer({ name: "", stocks:[] });
    setStockSymbol("");
    setStockCompany("");
    setStockPrice("");
    fetchBuyers();
  };

  const handleAddStock = () => {
    setNewBuyer(prevBuyer => ({
      ...prevBuyer,
      stocks: [...prevBuyer.stocks, {
      
        symbol: stockSymbol,
        company: stockCompany,
        price: parseFloat(stockPrice),
        buyers: [] // Add buyers if needed
      }]
    }));
    setStockSymbol("");
    setStockCompany("");
    setStockPrice("");
    
  };

  const handleUpdateBuyer = async (id) => {
    await updateBuyer(id, newBuyer);
    setNewBuyer({ name: "", email: "", phone: "" });
    fetchBuyers();
  };

  const handleDeleteBuyer = async (id) => {
    await deleteBuyer(id);
    fetchBuyers();
  };

  return (
    <div>
      <h2>Buyers</h2>
      <ul>
        {" "}
        {buyers.map((buyer) => (
          <li key={buyer.id}>
            {" "}
            {buyer.name} - {buyer.id} - {buyer.phone} {" "}
            <button onClick={() => handleUpdateBuyer(buyer.id)}>Update</button>
            <button onClick={() => handleDeleteBuyer(buyer.id)}>Delete</button>
          </li>
        ))}{" "}
      </ul>
      <h3>Add New Buyer</h3>
      <input
        type="text"
        placeholder="Name"
        value={newBuyer.name}
        onChange={(e) => setNewBuyer({ ...newBuyer, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone"
        value={newBuyer.phone}
        onChange={(e) => setNewBuyer({ ...newBuyer, phone: e.target.value })}
      />
      <h4>Stocks</h4>
      <input
        type="text"
        placeholder="Stock Symbol"
        value={stockSymbol}
        onChange={(e) => setStockSymbol(e.target.value)}
      />
      <input
        type="text"
        placeholder="Stock Company"
        value={stockCompany}
        onChange={(e) => setStockCompany(e.target.value)}
      />
      <input
        type="number"
        placeholder="Stock Price"
        value={stockPrice}
        onChange={(e) => setStockPrice(e.target.value)}
      />
      <button onClick={handleAddStock}>Add Stock</button>
      <button onClick={handleCreateBuyer}>Add Buyer</button>
    </div>
  );
}

export default Buyers;
