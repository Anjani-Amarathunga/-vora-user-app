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

export const getAllProducts = async (filters = {}) => {
  const {
    page = 0,
    size = 12,
    sort = "id",
    order = "DESC",
    category,
    search,
  } = filters;
  const params = new URLSearchParams();
  params.append("page", page);
  params.append("size", size);
  params.append("sort", sort);
  params.append("order", order);
  if (category) params.append("category", category);
  if (search) params.append("search", search);

  const response = await api.get(`/products?${params.toString()}`);
  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const searchProducts = async (searchTerm, filters = {}) => {
  const response = await api.get("/products/search", {
    params: { search: searchTerm, ...filters },
  });
  return response.data;
};

export const getCategories = async () => {
  const response = await api.get("/categories");
  return response.data;
};

export const getFeaturedProducts = async () => {
  const response = await api.get("/products/featured");
  return response.data;
};

export const getProductReviews = async (productId) => {
  const response = await api.get(`/products/${productId}/reviews`);
  return response.data;
};

export const createProductReview = async (productId, reviewData) => {
  const response = await api.post(`/products/${productId}/reviews`, reviewData);
  return response.data;
};

export default api;
