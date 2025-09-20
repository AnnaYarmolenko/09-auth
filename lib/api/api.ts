import axios from 'axios';

// Створюємо інстанс axios
export const nextServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // дозволяє axios працювати з cookie
});

