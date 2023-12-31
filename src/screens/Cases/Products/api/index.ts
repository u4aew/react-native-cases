import axios from 'axios';

const BASE_URL = 'http://172.18.1.137:3100';

export async function fetchProducts() {
  try {
    const response = await axios.get(`${BASE_URL}/api/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}
