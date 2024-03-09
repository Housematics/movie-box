import React from "react";
import "./CelebrityPoster.css";
import { ICelebrity } from "@/interfaces/movies.interface";
import { Link } from "react-router-dom";
import { TMDB_IMAGE_BASE_URL } from "@constants/index";

interface Props {
  celebrity: ICelebrity;
}

const CelebrityPoster: React.FC<Props> = ({ celebrity }) => {
  return (
    <div className="celebrity-poster">
      <Link to="/">
        <div className="poster-body">
          <img
            src={`${TMDB_IMAGE_BASE_URL + celebrity.profile_path}`}
            alt="celebrity-image"
          />

          <h4>{celebrity.name || celebrity.original_name}</h4>
        </div>
      </Link>
    </div>
  );
};

export default CelebrityPoster;
