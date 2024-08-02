//Buyers js File

import React, { useEffect, useState } from 'react';
import { createBuyer, deleteBuyer, getBuyers, updateBuyer } from '../apiService';
 
function Buyers() {
const [buyers, setBuyers] = useState([]);
const [newBuyer, setNewBuyer] = useState({ name: '', email: '', phone: '' });
 
  useEffect(() => {
fetchBuyers();

  }, []);
  const fetchBuyers = async () => {
const response = await getBuyers();
setBuyers(response.data);
  };

  const handleCreateBuyer = async () => {
await createBuyer(newBuyer);
setNewBuyer({ name: '', email: '', phone: '' });
fetchBuyers();
  };
 
  const handleUpdateBuyer = async (id) => {
await updateBuyer(id, newBuyer);
setNewBuyer({ name: '', email: '', phone: '' });
fetchBuyers();
  };
 
  const handleDeleteBuyer = async (id) => {
await deleteBuyer(id);
fetchBuyers();
  };
 
  return (

    <div><h2>Buyers</h2><ul>        {buyers.map(buyer => (          <li key={buyer.id}>            {buyer.name} - {buyer.email} - {buyer.phone}            <button onClick={() => handleUpdateBuyer(buyer.id)}>Update</button><button onClick={() => handleDeleteBuyer(buyer.id)}>Delete</button></li>        ))}      </ul><h3>Add New Buyer</h3><input type="text" placeholder="Name" value={newBuyer.name} onChange={(e) => setNewBuyer({ ...newBuyer, name: e.target.value })} />       <input type="text" placeholder="Email" value={newBuyer.email} onChange={(e) => setNewBuyer({ ...newBuyer, email: e.target.value })} /> <input type="text" placeholder="Phone" value={newBuyer.phone} onChange={(e) => setNewBuyer({ ...newBuyer, phone: e.target.value })} /> <button onClick={handleCreateBuyer}>Add Buyer</button></div>

  );

}
 
export default Buyers;
 