import React from "react";
import "./MoviePoster.css";
import { IMovie } from "@interfaces/movies.interface";
import { TMDB_IMAGE_BASE_URL } from "@constants/index";
import { Link } from "react-router-dom";
import ImdbLogo from "@assets/tmdb.png";
import AppleLogo from "@assets/apple.png";
interface Props {
  movie: IMovie;
}

const MoviePoster: React.FC<Props> = ({ movie }) => {
  const onCLickHandler = () => {};
  return (
    <div className="movie-poster">
      <div className="movie-poster-title">
        <span>{movie.media_type}</span>
        <i className="fa-solid fa-heart" onClick={onCLickHandler}></i>
      </div>
      <Link to="/">
        <div className="poster-body">
          <img
            src={`${TMDB_IMAGE_BASE_URL + movie.poster_path}`}
            alt="movie-image"
          />
          <p>
            {movie.original_language.toUpperCase()},{" "}
            {movie.release_date || movie.first_air_date}
          </p>
          <h4>
            {movie.title ||
              movie.name ||
              movie.original_title ||
              movie.original_name}
          </h4>
          <div>
            <div>
              <img src={ImdbLogo} alt="imdb-logo" />
              <span>{movie.vote_average.toFixed(1)}/10</span>
            </div>
            <div>
              <img src={AppleLogo} alt="apple-logo" />
              <span>{movie.vote_count}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MoviePoster;
