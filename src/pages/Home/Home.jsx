import React from "react";
import About from "../About/About";
import { useTitle } from "../../Hook/useTitle";
import { useEffect } from "react";
import Banner from "../../Components/Banner";
import Featured from "../Featured/Featured";
import Categories from "../Categories/Categories";
import Gallery from "../../Components/Gallery";
import Activities from "../../Components/Activities/Activities";

const Home = () => {
  useTitle("InnovateX");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      <Featured />
      <Categories />
      <About />
      <Gallery />
      <Activities />
    </>
  );
};

export default Home;
