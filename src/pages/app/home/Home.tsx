import React from "react";
import Layout from "@components/Layout/Layout";
import "./Home.css";
import Showcase from "@/components/showcase/Showcase";
import TrendingMovies from "@components/rows/trending/Movies";
import AllMovies from "@components/rows/normal/Movies";

const Home: React.FC = () => {
  return (
    <Layout>
      <section className="home" id="home">
        <Showcase />
        <TrendingMovies type="tv" title="Popular Series" />
        <TrendingMovies type="movie" title="Popular Movies" />
        <TrendingMovies type="all" title="All Trendings" />
        <AllMovies type="tv" title="All Series" />
        <AllMovies type="movie" title="All Movies" />
      </section>
    </Layout>
  );
};

export default Home;
