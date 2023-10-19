import React from "react";
import Event from "../Event/Event";
import SectionTitle from "../../Shared/SectionTitle";
import { useGetEventsQuery } from "../../redux/api/events";
import Spinner from "../../Components/Spinner";

const Featured = () => {
  const { data: advertised, isLoading } = useGetEventsQuery();
  console.log("advertised", advertised);

  const content = { title: "Events" };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      {advertised?.data?.length > 0 && (
        <section className="px-4 sm:px-10 lg:px-20 py-12 md:py-20 bg-[#0201010d]">
          <div>
            <SectionTitle content={content}></SectionTitle>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="fade-up"
          >
            {advertised?.data?.map((event) => (
              <Event key={event._id} event={event}></Event>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Featured;
