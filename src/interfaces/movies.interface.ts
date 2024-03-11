export type Gender = "movie" | "tv";

export type Trending = Gender | "all";

interface Genres {
  id: number;
  name: string;
}
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
  genres?: Genres[];
  budget?: number;
}

export interface IMoviesResp {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface ICelebrity {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  known_for: IMovie[];
}

export interface ICelebritiesResp {
  page: number;
  results: ICelebrity[];
  total_pages: number;
  total_results: number;
}
