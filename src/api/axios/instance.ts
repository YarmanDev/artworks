import axios from "axios";

const BASE_URL = `https://api.harvardartmuseums.org/object`;

const getHeaders = () => ({
  "Content-Type": "application/json",
});

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: getHeaders(),
});
