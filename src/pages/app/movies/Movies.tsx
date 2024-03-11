import { Gender } from "@/interfaces/movies.interface";
import React, { useEffect, useState } from "react";
import movieService from "@services/movie.service";
import { IMoviesResp } from "@interfaces/movies.interface";
interface Props {
  type: Gender;
}

const Movies: React.FC<Props> = ({ type }) => {
  const [movies, setMovies] = useState<IMoviesResp | null>(null);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await movieService.fetchMovies(type, filters.join("&"));
      setMovies(response);
    };
    fetchData();
  }, []);
  return <div>Movies</div>;
};

export default Movies;
