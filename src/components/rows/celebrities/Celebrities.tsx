import React, { useEffect, useState } from "react";
import "./Celebrities.css";
import movieService from "@services/movie.service";
import { ICelebrity } from "@interfaces/movies.interface";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CelebrityPoster from "@components/poster/CelebrityPoster";

interface Props {
  title: string;
}

const Celebrities: React.FC<Props> = ({ title }) => {
  const [celebrities, setCelebrities] = useState<ICelebrity[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await movieService.fetchCelebrities();
      setCelebrities(results);
    };
    fetchData();
  }, []);
  return (
    <section className="row-section">
      <div className="row-section-header">
        <h3>{title}</h3>
        <Link to={`/celebrities`}>
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
          {celebrities.map((celebrity, key) => (
            <SwiperSlide key={key}>
              <CelebrityPoster celebrity={celebrity} />
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

export default Celebrities;
