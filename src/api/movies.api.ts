import axios from "./axios.api";
import type { Trending, Gender } from "@interfaces/movies.interface";

export const fetchGenders = async (type: Gender) =>
  axios.get(`/genre/${type}/list`);

export const fetchLanguages = async () => axios.get("/configuration/languages");

export const fetchTrendings = async (type: Trending) =>
  axios.get(`/trending/${type}/day`);

export const fetchMovies = async (type: Gender, filter: string) =>
  axios.get(`/discover/${type}?${filter}`);

export const fetchById = async (type: Gender, id: number) =>
  axios.get(`/${type}/${id}`);

export const fetchTrailers = async (type: Gender, id: number) =>
  axios.get(`/${type}/${id}/videos`);

export const fetchCelebrities = async (page: string) =>
  axios.get(`/person/popular?page=${page}`);

export const fetchCelebrity = async (id: number, filter: string) =>
  axios.get(`/person/popular/${id}?${filter}`);
