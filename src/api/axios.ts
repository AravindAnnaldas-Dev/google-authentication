import axios from "axios";
import Cookies from "js-cookie";
import {
  ACCESS_TOKEN_COOKIE,
  REFRESH_TOKEN_COOKIE,
  ACCESS_TOKEN_COOKIE_OPTIONS,
} from "../constants/cookies";

const app = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

app.interceptors.request.use((config) => {
  const token = Cookies.get(ACCESS_TOKEN_COOKIE);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

app.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }
    originalRequest._retry = true;

    const refresh = Cookies.get(REFRESH_TOKEN_COOKIE);
    if (!refresh) {
      return Promise.reject(error);
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/refresh`,
        { refresh },
      );

      Cookies.set(ACCESS_TOKEN_COOKIE, data.token, ACCESS_TOKEN_COOKIE_OPTIONS);
      originalRequest.headers.Authorization = `Bearer ${data.token}`;

      return app(originalRequest);
    } catch (refreshError) {
      Cookies.remove(ACCESS_TOKEN_COOKIE);
      Cookies.remove(REFRESH_TOKEN_COOKIE);
      window.location.href = "/";
      return Promise.reject(refreshError);
    }
  },
);

export default app;
