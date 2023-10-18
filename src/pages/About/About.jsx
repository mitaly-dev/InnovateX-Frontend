import React from "react";
import { useEffect } from "react";
import { useTitle } from "../../Hook/useTitle";

const About = () => {
  useTitle("About");
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);
  return (
    <div className="grid gap-12 lg:grid-cols-2 sm:mx-auto font-roboto px-4 sm:px-10 lg:px-20 py-16 mx-auto lg:py-20 bg-[#0201010d]">
      <div
        className="justify-center font-roboto text-secondary space-y-5 text-base"
        data-aos="fade-up"
      >
        <h3 className="text-4xl font-semibold pb-2 text-secondary ">
          Know About <span className="text-darkOrange">InnovateX</span>
        </h3>
        <p className="text-primary text-lg italic">
          Drawing thousands of the world's technology leaders together to learn
          and do business.
        </p>
        <div className="text-lightGray font-light space-y-5">
          <p>
            Must explain to you how all this mistaken idea of denouncing
            pleasure and seds praising pain was born and I will give you a
            complete account of the system, and expound the actual teaching of
            the great explorer of the truth, the masterbuilder of human
            happiness rejects, dislikes, or avoids pleasure.
          </p>
          <p>
            Which toil and pain can procure him some great pleasure. To take a
            trivial example, which of us ever undertakes laborious physical
            exercise, except to obtain some advantage from annoying
            consequences.
          </p>
        </div>
      </div>
      <div data-aos="fade-right">
        <img
          className="object-cover w-full h-full col-span-2 rounded shadow-lg"
          src="https://i.ibb.co/BPr6Hx5/about.jpg"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
