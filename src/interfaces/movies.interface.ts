export type Gender = "movie" | "tv";

export type Trending = Gender | "all";

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: Gender;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title?: string;
  original_title?: string;
  name?: string;
  original_name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date?: string;
  origin_country?: string[];
}

export interface ITrendsResp {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
