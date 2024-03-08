import React, { useEffect, useState } from "react";
import "./Movies.css";
import movieService from "@services/movie.service";
import { IMovie, Gender } from "@interfaces/movies.interface";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MoviePoster from "@components/poster/MoviePoster";

interface Props {
  type: Gender;
  title: string;
}

const Movies: React.FC<Props> = ({ type, title }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await movieService.fetchMovies(type);
      setMovies(results);
    };
    fetchData();
  }, []);
  return (
    <section className="row-section">
      <div className="row-section-header">
        <h3>{title}</h3>
        <Link to={``}>
          See more <i className="fa-solid fa-angle-right"></i>
        </Link>
      </div>

      <div className="row-section-movies">
        <Swiper
          direction="horizontal"
          pagination={{
            clickable: true,
          }}
          navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
          slidesPerView={5}
          modules={[Navigation]}
          spaceBetween={30}
          autoHeight={true}
          loop={false}
          className="mySwiper .swiper"
        >
          {movies.map((movie, key) => (
            <SwiperSlide key={key}>
              <MoviePoster movie={movie} />
            </SwiperSlide>
          ))}

          <button className="arrow-left arrow">
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button className="arrow-right arrow">
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </Swiper>
      </div>
    </section>
  );
};

export default Movies;
