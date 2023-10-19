import React from "react";
import Lottie from "lottie-react";
import welcome from "../assets/animation/welcome.json";
import { useTitle } from "../Hook/useTitle";
import { getUserInfo } from "../utils/local-storage";

const Dashboard = () => {
  useTitle("Dashboard");
  const user = getUserInfo();

  return (
    <div className="flex min-h-[60vh] justify-center items-center">
      <Lottie animationData={welcome} loop={true}></Lottie>
    </div>
  );
};

export default Dashboard;
