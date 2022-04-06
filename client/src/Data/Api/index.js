import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
});

export const getAllCrosshairs = (page) => API.get(`/crosshairs?page=${page}`);
