import React from "react";

const Gallery = () => {
  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          src="https://i.ibb.co/GFHXh2X/evangeline-shaw-nw-LTVwb7-Db-U-unsplash.jpg"
          alt=""
          className="object-cover w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        />
        <img
          alt=""
          className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/rdpH6Cf/the-climate-reality-project-Hb6u-Wq0i4-MI-unsplash.jpg"
        />
        <img
          alt=""
          className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/MsdHXMb/jaime-lopes-0-RDBOAdnb-WM-unsplash.jpg"
        />
        <img
          alt=""
          className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/d7FMjmt/md-duran-r-E9vg-D-TXg-M-unsplash.jpg"
        />
        <img
          alt=""
          className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/BHDq9RZ/kane-reinholdtsen-LETdkk7w-HQk-unsplash.jpg"
        />
        <img
          alt=""
          className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/PMvvSyz/product-school-S3hhrq-Lrg-YM-unsplash.jpg"
        />
        <img
          alt=""
          className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/ZSJbjgK/antenna-oh-NCIi-KVT1g-unsplash.jpg"
        />
        <img
          alt=""
          className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/SndTfCt/antenna-cw-cj-n-Fa14-unsplash.jpg"
        />
        <img
          alt=""
          className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/2q1ywSj/product-school-V8-KOZEUTx9-E-unsplash.jpg"
        />
        <img
          src="https://i.ibb.co/8ctGSrR/pablo-heimplatz-ZODc-Bk-Eohk8-unsplash.jpg"
          alt=""
          className="object-cover w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
        />
      </div>
    </section>
  );
};

export default Gallery;
