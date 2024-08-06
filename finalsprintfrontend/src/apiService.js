//apiService.js

import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Adjust the URL

export const getBuyers = () => axios.get(`${API_URL}/buyers`);
export const createBuyer = (buyer) => axios.post(`${API_URL}/buyers`, buyer);
export const updateBuyer = (id, buyer) => axios.put(`${API_URL}/buyers/${id}`, buyer);
export const deleteBuyer = (id) => axios.delete(`${API_URL}/buyers/${id}`);

export const getStocks = () => axios.get(`${API_URL}/stocks`);
export const getStockMarkets = () => axios.get(`${API_URL}/stockmarkets`);