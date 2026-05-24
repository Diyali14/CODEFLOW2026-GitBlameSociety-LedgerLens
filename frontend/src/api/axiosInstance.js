import axios from "axios";

const axiosInstance = axios.create({
    // Sourced from VITE_API_BASE_URL in your .env file
    // Local:      http://localhost:8080
    // Production: set VITE_API_BASE_URL in your deployment environment
    baseURL: import.meta.env.VITE_API_BASE_URL,

    withCredentials: true,

    headers: {
        "Content-Type": "application/json",
    },
});

// Response interceptor — handle session expiry gracefully
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Session expired or unauthenticated — callers handle redirect
            console.warn("Unauthenticated request intercepted (401)");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;