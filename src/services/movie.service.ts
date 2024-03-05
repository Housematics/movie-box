import * as movieApi from "@api/movies.api";
import type { ITrendsResp } from "@interfaces/movies.interface";

class MovieService {
  async fetchTrendings(): Promise<ITrendsResp> {
    try {
      const { data } = await movieApi.fetchTrendings("all");
      return data;
    } catch (error: any) {
      throw new Error("cannot fetch trendings");
    }
  }
}

export const movieService = new MovieService();
export default movieService;
