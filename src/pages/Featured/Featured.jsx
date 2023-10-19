import React from "react";
import Product from "../Products/Product";
import SectionTitle from "../../Shared/SectionTitle";

const Featured = () => {
  const advertised = [];

  const content = { heads: "latest", title: "advertise" };
  return (
    <>
      {advertised.length > 0 && (
        <section className="px-4 sm:px-10 lg:px-20 py-12 md:py-20 bg-[#0201010d]">
          <div>
            <SectionTitle content={content}></SectionTitle>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="fade-up"
          >
            {advertised.map((advertise) => (
              <Product key={advertise._id} product={advertise}></Product>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Featured;
