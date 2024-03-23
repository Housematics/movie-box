import React, { useEffect, useState } from "react";

import movieService from "@services/movie.service";
import { IMovie } from "@interfaces/movies.interface";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    const fetchMovie = async () => {};
  }, []);
  return <div>Movie</div>;
};

export default Movie;
