import React from "react";
import Advertised from "../Advertised/Advertised";
import Categories from "../Categories/Categories";
import About from "../About/About";
import { useTitle } from "../../Hook/useTitle";
import { useEffect } from "react";
import Banner from "../../Components/Banner";
import Gallery from "../../Components/Gallery";

const Home = () => {
  useTitle("InnovateX");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />

      <Advertised />
      <Categories />
      <About />
      <Gallery />
      <Activities />
    </>
  );
};

export default Home;
