import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const HomeLayout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
