import React from "react";
import Event from "./Event";
import { useLoaderData } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import { useEffect } from "react";
import { useTitle } from "../../Hook/useTitle";
import Spinner from "../../Components/Spinner";

const Events = () => {
  const navigation = useNavigation();
  const products = useLoaderData();
  useTitle("Products");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (navigation.state === "loading") {
    return <Spinner></Spinner>;
  }
  return (
    <section className="px-4 sm:px-10 lg:px-20 py-28 bg-[#FAF8F8]">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="fade-up"
      >
        {products.map((event) => (
          <Event key={event._id} event={event}></Event>
        ))}
      </div>
    </section>
  );
};

export default Events;
