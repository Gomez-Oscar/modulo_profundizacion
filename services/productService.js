import axios from 'axios';

const URL_BASE = 'https://backend-modulo-profundizacion.onrender.com';

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`${URL_BASE}/products`);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getProductById = async id => {
  try {
    const { data } = await axios.get(`${URL_BASE}/products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
