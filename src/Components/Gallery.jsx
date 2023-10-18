import React from "react";

import image1 from "../assets/images/galleryImg1.jpg";
import image2 from "../assets/images/galleryImg2.jpg";
import image3 from "../assets/images/galleryImg3.jpg";
import image4 from "../assets/images/galleryImg4.jpg";
const Gallery = () => {
  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          src={image1}
          alt=""
          className="object-cover w-full h-full rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        />
        <img
          alt=""
          className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src={image2}
        />
        <img
          alt=""
          className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src={image3}
        />
        <img
          alt=""
          className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src={image4}
        />
      </div>
    </section>
  );
};

export default Gallery;
