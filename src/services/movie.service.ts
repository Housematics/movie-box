import * as movieApi from "@api/movies.api";
import type {
  IMoviesResp,
  Trending,
  Gender,
  ICelebritiesResp,
  IMovie,
} from "@interfaces/movies.interface";

class MovieService {
  async fetchTrendings(type: Trending): Promise<IMoviesResp> {
    try {
      const { data } = await movieApi.fetchTrendings(type);
      return data;
    } catch (error: any) {
      throw new Error("cannot fetch trendings");
    }
  }

  async fetchMovies(type: Gender, filter: string = ""): Promise<IMoviesResp> {
    try {
      const { data } = await movieApi.fetchMovies(type, filter);
      return data;
    } catch (error: any) {
      throw new Error("cannot fetch movies");
    }
  }

  async fetchCelebrities(page: number = 1): Promise<ICelebritiesResp> {
    try {
      const { data } = await movieApi.fetchCelebrities(page);
      return data;
    } catch (error: any) {
      throw new Error("cannot fetch celebrities");
    }
  }

  async fetchMovie(id: number, type: Gender): Promise<IMovie> {
    try {
      const { data } = await movieApi.fetchMovieById(type, id);
      return data;
    } catch (error: any) {
      throw new Error("cannot fetch movie");
    }
  }
}

export const movieService = new MovieService();
export default movieService;
