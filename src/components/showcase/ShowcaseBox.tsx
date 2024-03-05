import React from "react";
import "./ShowcaseBox.css";
import type { IMovie } from "@interfaces/movies.interface";
import { TMDB_IMAGE_BASE_URL } from "@constants/index";
import TmdbLogo from "@assets/tmdb.png";
import Apple from "@assets/apple.png";
import { movieOverviewCutter } from "@utils/functions.util";

interface Props {
  movie: IMovie;
}
const ShowcaseBox: React.FC<Props> = ({ movie }) => {
  return (
    <div
      className="showcase-box"
      style={{
        backgroundImage: `url(${TMDB_IMAGE_BASE_URL}${movie.backdrop_path})`,
      }}
    >
      <div className="showcase-box-wrapper swiper-no-swiping">
        <h1>
          {movie.title ||
            movie.original_title ||
            movie.name ||
            movie.original_name}
        </h1>

        <div className="showcase-box-wrapepr-infos">
          <div>
            <img src={TmdbLogo} alt="tmdb-logo" />
            <p>{movie.vote_average}/10</p>
          </div>
          <div>
            <img src={Apple} alt="apple-logo" />
            <p>{movie.vote_count}</p>
          </div>
        </div>

        <p>{movieOverviewCutter(movie.overview)}</p>

        <button>
          <i className="fa-solid fa-play" />
          WATCH TRAILER
        </button>
      </div>
    </div>
  );
};

export default ShowcaseBox;
