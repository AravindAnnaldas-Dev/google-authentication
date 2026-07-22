import axios from "axios";
import Cookies from "js-cookie";

const app = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

app.interceptors.request.use((config) => {
  const token = Cookies.get("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default app;
