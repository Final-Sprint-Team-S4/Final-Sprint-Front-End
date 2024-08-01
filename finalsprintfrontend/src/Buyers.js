//Buyers js File

importReact, { useEffect, useState } from'react';
import { getBuyers, createBuyer, updateBuyer, deleteBuyer } from'../apiService';
 
functionBuyers() {
const [buyers, setBuyers] = useState([]);
const [newBuyer, setNewBuyer] = useState({ name: '', email: '', phone: '' });
 
  useEffect(() => {
fetchBuyers();

  }, []);
  constfetchBuyers = async () => {
const response = awaitgetBuyers();
setBuyers(response.data);
  };

  consthandleCreateBuyer = async () => {
awaitcreateBuyer(newBuyer);
setNewBuyer({ name: '', email: '', phone: '' });
fetchBuyers();
  };
 
  consthandleUpdateBuyer = async (id) => {
awaitupdateBuyer(id, newBuyer);
setNewBuyer({ name: '', email: '', phone: '' });
fetchBuyers();
  };
 
  consthandleDeleteBuyer = async (id) => {
awaitdeleteBuyer(id);
fetchBuyers();
  };
 
  return (

    <div><h2>Buyers</h2><ul>        {buyers.map(buyer => (          <li key={buyer.id}>            {buyer.name} - {buyer.email} - {buyer.phone}            <button onClick={() => handleUpdateBuyer(buyer.id)}>Update</button><button onClick={() => handleDeleteBuyer(buyer.id)}>Delete</button></li>        ))}      </ul><h3>Add New Buyer</h3><input type="text" placeholder="Name" value={newBuyer.name} onChange={(e) => setNewBuyer({ ...newBuyer, name: e.target.value })} />       <input type="text" placeholder="Email" value={newBuyer.email} onChange={(e) => setNewBuyer({ ...newBuyer, email: e.target.value })} /> <input type="text" placeholder="Phone" value={newBuyer.phone} onChange={(e) => setNewBuyer({ ...newBuyer, phone: e.target.value })} /> <button onClick={handleCreateBuyer}>Add Buyer</button></div>

  );

}
 
exportdefaultBuyers;
 