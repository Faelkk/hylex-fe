import axios from "axios";

export const httpClient = axios.create({
  baseURL: "http://localhost:5001",
});

httpClient.interceptors.request.use((config) => {
  return config;
});

httpClient.interceptors.response.use(async (data) => {
  return data;
});
