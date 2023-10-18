import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { useState } from "react";

const Banner = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          scrolled ? "bg-gray-900" : "bg-[#070750ad] "
        } py-4 mx-auto px-4 sm:px-10 lg:px-20 font-roboto sticky top-0 z-50 shadow-sm duration-100 text-white `}
      >
        <Navbar />
      </div>

      <div>
        <img
          src="https://i.ibb.co/3zwjJs2/alexandre-pellaes-6v-Ajp0psc-X0-unsplash.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-[#070750ad] min-h-[90vh] font-roboto items-center flex justify-center px-4 sm:px-10 lg:px-20">
          <div className="py-16 lg:py-20" data-aos="fade-right">
            <div className=" text-white text-center">
              <h2 className=" mb-6 font-roboto text-3xl font-semibold tracking-tight sm:text-5xl">
                Innovate<span className="text-primary">X</span> Conference 2023
              </h2>
              <p className=" mb-4 text-base md:text-2xl">
                Sell ​​your used products and buy other people's used products
              </p>

              <div className="relative text-white border bg-[#ffffff56] rounded-md w-2/3 m-auto">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="button"
                    title="search"
                    className="p-1 focus:outline-none focus:ring"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 "
                    >
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="Search"
                  placeholder="Search your Event..."
                  className="py-2 pl-10 text-sm rounded-md focus:outline-none dark:bg-gray-800  focus:dark:bg-gray-900 focus:dark:border-violet-400 bg-transparent text-white w-full"
                />
              </div>

              <Link
                to="/categories"
                aria-label=""
                className="inline-flex items-center gap-2 font-semibold px-4 py-2  sm:px-6 sm:py-3 text-base bg-primary sm:text-xl my-5 rounded-md bg-gradient-to-b from-primary to-[#ea551bbf] hover:bg-gradient-to-t duration-200"
              >
                <BsFillArrowRightCircleFill size={16} />
                Buy Ticket
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
