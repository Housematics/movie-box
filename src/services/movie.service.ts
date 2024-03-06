import * as movieApi from "@api/movies.api";
import type { ITrendsResp, Trending } from "@interfaces/movies.interface";

class MovieService {
  async fetchTrendings(type: Trending): Promise<ITrendsResp> {
    try {
      const { data } = await movieApi.fetchTrendings(type);
      return data;
    } catch (error: any) {
      throw new Error("cannot fetch trendings");
    }
  }
}

export const movieService = new MovieService();
export default movieService;
