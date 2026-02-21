import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8080/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to request headers if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const loginUser = async (email, password) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};

export const verifyToken = async (token) => {
  const response = await api.get("/auth/verify", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getUserProfile = async () => {
  const response = await api.get("/auth/profile");
  return response.data;
};

export const updateUserProfile = async (userData) => {
  const response = await api.put("/auth/profile", userData);
  return response.data;
};

export default api;
