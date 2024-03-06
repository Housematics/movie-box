import axios, { AxiosInstance } from "axios";

import * as constants from "@constants/index";

export const instance: AxiosInstance = axios.create({
  baseURL: constants.TMDB_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${constants.TMDB_ACCESS_TOKEN}`,
  },
});

export default instance;
