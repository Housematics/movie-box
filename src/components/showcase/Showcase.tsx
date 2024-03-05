import React, { useEffect } from "react";
import "./Showcase.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import movieService from "@/services/movie.service";
import type { IMovie } from "@interfaces/movies.interface";
import ShowcaseBox from "./ShowcaseBox";

const Showcase: React.FC = () => {
  const [trends, setTrends] = React.useState<IMovie[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { results } = await movieService.fetchTrendings();
      setTrends(results);
    };
    fetchData();
  }, []);
  return (
    <section className="showcase">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        loop={true}
        className="mySwiper"
      >
        {trends.slice(0, 5).map((movie, key) => (
          <SwiperSlide key={key}>
            <ShowcaseBox movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Showcase;
