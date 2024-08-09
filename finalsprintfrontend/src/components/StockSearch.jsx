// import React, { useState } from "react";
// import axios from "axios";

// const API_URL = "http://localhost:8080";

// function StockSearch() {
//   const [stockSymbol, setStockSymbol] = useState("");
//   const [buyers, setBuyers] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setBuyers([]);
//     try {
//       const response = await axios.get(
//         `${API_URL}/buyers/searchByStock/${stockSymbol}`
//       );
//       setBuyers(response.data); // Assuming response.data is the list of buyers
//     } catch (error) {
//       setError("Failed to fetch buyers.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Search for Buyers by Stock</h2>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Enter stock symbol"
//           value={stockSymbol}
//           onChange={(e) => setStockSymbol(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {buyers.length > 0 && (
//         <div>
//           <h3>Buyers List</h3>
//           <ul>
//             {buyers.map((buyer) => (
//               <li key={buyer.id}>
//                 <strong>Name:</strong> {buyer.name}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       {buyers.length === 0 && !loading && !error && <p>No buyers found.</p>}
//     </div>
//   );
// }

// export default StockSearch;

import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080";

function StockSearch() {
  const [stockSymbol, setStockSymbol] = useState("");
  const [buyers, setBuyers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setBuyers([]);
    try {
      const response = await axios.get(
        `${API_URL}/buyers/searchByStock/${stockSymbol}`
      );
      setBuyers(response.data); // Response data is assumed to be an array of buyers
    } catch (error) {
      setError("Failed to fetch buyers.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Search for Buyers by Stock</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter stock symbol"
          value={stockSymbol}
          onChange={(e) => setStockSymbol(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {buyers.length > 0 && (
        <div>
          <h3>Buyers List</h3>
          <ul>
            {buyers.map((buyer) => (
              <li key={buyer.id}>
                <strong>Name:</strong> {buyer.name}
                {buyer.stocks && buyer.stocks.length > 0 && (
                  <>
                    <div>
                      <strong>Stock:</strong>
                      <ul>
                        {buyer.stocks.map((stock) => (
                          <li key={stock.id}>
                            <strong>Company Name:</strong> {stock.company}
                            <br />
                            <strong>Symbol:</strong> {stock.symbol}
                            <br />
                            <strong>Price:</strong> ${stock.price}
                            <br />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <br />
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      {buyers.length === 0 && !loading && !error && <p>No buyers found.</p>}
    </div>
  );
}

export default StockSearch;
