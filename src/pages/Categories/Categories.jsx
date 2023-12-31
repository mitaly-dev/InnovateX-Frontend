import React from "react";
import Category from "./Category";
import Spinner from "../../Components/Spinner";
import { useTitle } from "../../Hook/useTitle";
import { useEffect } from "react";
import { useGetCategoriesQuery } from "../../redux/api/categories";

const Categories = () => {
  useTitle("Categories");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: categories, isLoading } = useGetCategoriesQuery();

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <section
      className="px-4 sm:px-10 lg:px-20 py-32"
      style={{
        backgroundImage: "linear-gradient(90deg, #0201010d 40%, #080a3c 0%)",
      }}
    >
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        data-aos="fade-right"
      >
        {categories?.data?.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
    </section>
  );
};

export default Categories;
