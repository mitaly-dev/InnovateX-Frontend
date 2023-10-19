import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight, FaCartPlus, FaCross, FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import BookingModal from "../../Components/BookingModal";
import { useCreateBookingMutation } from "../../redux/api/booking";
import { useEffect } from "react";

const Event = ({ event }) => {
  const [createBooking, { isSuccess, isError, data, error }] =
    useCreateBookingMutation();
  const user = {};

  const navigate = useNavigate();

  const {
    title,
    description,
    location,
    price,
    eventDate,
    imageUrl,
    categoryId,
  } = event;

  const wishListHandle = () => {
    const product = {
      imageUrl,
      title,
      categoryId,
      price,
      name: user?.displayName,
      email: user?.email,
    };
    fetch(`${process.env.REACT_APP_PORT}/wishList`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("wish product added successfull");
        } else {
          toast.error(data.message, { duration: 1200 });
        }
      })
      .catch((error) => console.log(error));
  };

  const productDetailsHandle = () => {
    navigate(`/event_details/${event?.id}`);
  };

  // added booking
  const handleBooking = () => {
    const data = {
      eventId: event?.id,
    };
    createBooking(data);
  };

  // success booking
  useEffect(() => {
    if (isSuccess) {
      toast.success("Added successfully");
    }

    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isSuccess, isError]);

  return (
    <div className="flex flex-col max-w-lg p-3 space-y-6 overflow-hidden rounded-lg shadow-lg font-roboto bg-white hover:shadow-xl">
      <div className="relative">
        <img
          src={imageUrl}
          alt=""
          className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500 rounded-lg"
        />
        <h2 className="mb-1 text-xl font-semibold capitalize">{title}</h2>
        <p className=" dark:text-gray-400">
          {description && description.slice(0, 120) + "..."}
        </p>
        <div className="absolute top-3 right-3">
          <button
            onClick={handleBooking}
            className="capitalize flex items-center text-white p-1 rounded-md border border-green-500"
          >
            <FaCartPlus size={25} className=" text-green-400"></FaCartPlus>
          </button>
        </div>
        <div className="absolute w-full top-2/4 left-0  text-blue-500 space-y-2 px-3">
          <div className="bg-[#000000c2] hover:bg-black duration-150 rounded-lg p-3 text-xl font-semibold w-full text-center">
            {eventDate}
          </div>
          <div className="bg-[#000000c2] hover:bg-black duration-150 rounded-lg p-3 text-xl font-semibold w-full text-center">
            {location}
          </div>
        </div>
      </div>
      <div className="text-[17px] space-y-1 capitalize">
        <h3 className="font-semibold">
          Price :
          <span className="text-red-600 font-semibold text-2xl">
            {price}TK.
          </span>
        </h3>
        <div className="flex justify-end items-center">
          <button
            type="button"
            onClick={productDetailsHandle}
            className="inline-flex gap-2 items-center  font-semibold px-6 py-2 rounded-lg  bg-orange-600 text-white text-base  cursor-pointer mt-7 "
          >
            Read more
            <FaArrowRight className="text-sm"></FaArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
