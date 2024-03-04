import axios, { AxiosInstance } from "axios";

const access_token = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export const instance: AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
});

export default instance;
