import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTitle } from "../../Hook/useTitle";
import {
  useCreateReviewAndRatingMutation,
  useGetEventQuery,
  useGetReviewAndRatingsQuery,
} from "../../redux/api/events";
import Spinner from "../../Components/Spinner";
import { getUserInfo } from "../../utils/local-storage";
import toast from "react-hot-toast";
import {
  useCreateBookingMutation,
  useDeleteBookingMutation,
  useGetBookingQuery,
  useGetBookingsQuery,
} from "../../redux/api/booking";

const EventDetails = () => {
  const { id } = useParams();
  const { data: event, isLoading } = useGetEventQuery(id);
  const [createBooking, { isSuccess, isError, data, error }] =
    useCreateBookingMutation();
  const [deleteBooking, { isSuccess: cancelSuccess }] =
    useDeleteBookingMutation();
  const { data: userBooking } = useGetBookingQuery(event?.data?.id);
  const { data: reviews } = useGetReviewAndRatingsQuery(event?.data?.id);
  const [createReviewAndRating, { isSuccess: reviewSuccess }] =
    useCreateReviewAndRatingMutation();
  const navigate = useNavigate();
  const [review, setReview] = useState("");
  const userInfo = getUserInfo();

  console.log("review", review);

  useTitle("event-Details");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // added booking
  const handleBooking = () => {
    const data = {
      eventId: event?.data?.id,
    };
    createBooking(data);
  };

  // booking cancel
  const cancelBooking = () => {
    deleteBooking(userBooking?.data?.id);
    navigate("/");
  };

  // submit review
  const submitReview = (e) => {
    e.preventDefault();
    const data = {
      review: review,
      userId: userInfo?.userId,
      eventId: event?.data?.id,
    };
    console.log("data", review);
    createReviewAndRating(data);
    setReview("");
  };
  // success booking
  useEffect(() => {
    if (isSuccess) {
      toast.success("Added successfully");
    }
    if (reviewSuccess) {
      toast.success("Review submit successfully");
    }
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (cancelSuccess) {
      toast.error("Booking Removed");
    }
  }, [isSuccess, isError, cancelSuccess, reviewSuccess]);

  // loading
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="px-4 sm:px-10 lg:px-20 py-16 mx-auto lg:py-20 bg-[#0201010d]">
      <div className="grid gap-12 lg:grid-cols-2 sm:mx-auto font-roboto">
        <div data-aos="fade-right">
          <img
            className="object-cover w-full col-span-2 rounded shadow-lg md:h-[500px]"
            src={event?.data?.imageUrl}
            alt="about"
          />
        </div>
        <div
          className="flex flex-col justify-center font-roboto text-secondary"
          data-aos="fade-up"
        >
          <div className="font-roboto capitalize pb-5">
            <p className="text-4xl font-semibold text-secondary ">
              {event?.data?.title}
            </p>
            <p className="text-sm font-semibold text-primary">
              {event?.data?.category?.title}
            </p>
            {/* <span className="text-primary text-lg italic">
              Category : {category}
            </span> */}
          </div>
          <div className="flex">
            <div>
              <p className="text-lg font-medium">{event?.data?.description}</p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="text-lg capitalize">
            <p className="mt-2 font-semibold">
              Price{" "}
              <span className="text-red-600 font-semibold text-2xl">
                ${event?.data?.price}
              </span>
            </p>
            <div className="w-full text-blue-500 space-y-2  py-4">
              <div className="bg-[#000000c2] hover:bg-black duration-150 rounded-lg p-3 text-xl font-semibold w-full text-center">
                {event?.data?.eventDate}
              </div>
              <div className="bg-[#000000c2] hover:bg-black duration-150 rounded-lg p-3 text-xl font-semibold w-full text-center">
                {event?.data?.location}
              </div>
            </div>
            <div className="flex justify-end items-center">
              {userBooking?.data?.status ? (
                <button
                  type="button"
                  className="inline-flex gap-2 items-center  font-semibold px-6 py-2 rounded-lg  bg-orange-600 text-white text-base  cursor-pointer mt-7 "
                >
                  Booked
                </button>
              ) : userBooking?.data ? (
                <button
                  onClick={cancelBooking}
                  type="button"
                  className="inline-flex gap-2 items-center  font-semibold px-6 py-2 rounded-lg  bg-orange-600 text-white text-base  cursor-pointer mt-7 "
                >
                  Remove
                </button>
              ) : (
                <button
                  onClick={handleBooking}
                  type="button"
                  className="inline-flex gap-2 items-center  font-semibold px-6 py-2 rounded-lg  bg-orange-600 text-white text-base  cursor-pointer mt-7 "
                >
                  Book Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-xl">Event Review</h3>
        <div className="mb-3">
          <form onSubmit={(e) => submitReview(e)}>
            <input
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="py-2 px-2 rounded-lg border"
            />
            <button
              type="submit"
              className="px-3 py-2 bg-black text-white rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-2">
          {reviews?.data?.map((item) => {
            return (
              <p className="  px-3 py-2 rounded-lg bg-[#00000023] w-6/12">
                {item?.review}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
