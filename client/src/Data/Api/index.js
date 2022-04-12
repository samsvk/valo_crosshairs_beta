import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
});

export const getAllCrosshairs = (page) => API.get(`/crosshairs?page=${page}`);
export const getCrosshairBySearch = (search) =>
  API.get(`/crosshairs/search?search=${search}`);
export const getLikedCrosshairs = (liked) =>
  API.get(`/crosshairs/liked/${liked}`);
