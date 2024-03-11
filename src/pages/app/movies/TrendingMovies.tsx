import { Gender, IMoviesResp } from "@/interfaces/movies.interface";
import movieService from "@/services/movie.service";
import React, { useEffect, useState } from "react";

interface Props {
  type: Gender;
}

const TrendingMovies: React.FC<Props> = ({ type }) => {
  const [movies, setMovies] = useState<IMoviesResp | null>(null);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await movieService.fetchMovies(type, filters.join("&"));
      setMovies(response);
    };
    fetchData();
  }, []);
  return <div>TrendingMovies</div>;
};

export default TrendingMovies;
