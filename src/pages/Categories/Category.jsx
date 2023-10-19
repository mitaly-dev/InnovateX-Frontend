import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/images/background-image.jpg";

const Category = ({ category }) => {
  console.log(category);
  const { title, id } = category;
  return (
    <Link
      to=""
      className="w-full bg-[#000000ce] border border-primary hover:bg-black duration-150 flex items-center justify-center rounded-full px-8 py-6 h-full"
    >
      <h2 className="text-white font-semibold capitalize text-2xl font-roboto ">
        {title}
      </h2>
    </Link>
  );
};

export default Category;
