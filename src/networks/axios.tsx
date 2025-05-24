import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // Use backend URL from .env
  withCredentials: true, // Required for Laravel Sanctum
  withXSRFToken: true, // Required for Laravel Sanctum
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.withXSRFToken = true;

axiosInstance.interceptors.request.use(async (config) => {
  // Ensure CSRF token is fetched before making POST or PUT requests
  if (config.method?.toLowerCase() === "post" || config.method?.toLowerCase() === "put") {
    await axios.get(import.meta.env.VITE_BACKEND_URL + "/sanctum/csrf-cookie");

    const xsrfToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("XSRF-TOKEN="))
      ?.split("=")[1];

    if (xsrfToken) {
      config.headers["X-XSRF-TOKEN"] = decodeURIComponent(xsrfToken);
    }
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

// TODO: Add interceptors for handling 401 and 403 errors

export default axiosInstance;
