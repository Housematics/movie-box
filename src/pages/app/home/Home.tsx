import React from "react";
import Layout from "@components/Layout/Layout";
import "./Home.css";
import Showcase from "@/components/showcase/Showcase";

const Home: React.FC = () => {
  return (
    <Layout>
      <section className="home" id="home">
        <Showcase />
      </section>
    </Layout>
  );
};

export default Home;
