import React, { useEffect } from "react";
import { useGetBookingsQuery } from "../../redux/api/booking";
import { getUserInfo } from "../../utils/local-storage";
import { Link, useNavigate } from "react-router-dom";

const MyBooking = () => {
  const userInfo = getUserInfo();
  const { data } = useGetBookingsQuery(userInfo?.userId);

  const fBooking = data?.data?.filter((item) => item?.status === true);
  if (fBooking?.length < 0) {
    return <p>Not Available</p>;
  }

  return (
    <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-semibold">Your Booking</h2>
      <ul className="flex flex-col divide-y divide-gray-700">
        {fBooking?.map((item) => {
          return (
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                  src={item.events?.imageUrl}
                  alt="Polaroid camera"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leadi sm:pr-8">
                        {item?.events?.title}
                      </h3>
                      <p className="text-sm dark:text-gray-400">
                        Location : {item?.events?.location}
                      </p>
                      <p className="text-sm dark:text-gray-400">
                        Time : {item?.events?.eventDate}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">
                        {item?.events?.price}€
                      </p>
                    </div>
                  </div>
                  {/* <div className="flex text-sm divide-x">
                    <button
                      onClick={() => cancelBooking(item?.id)}
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span>Remove</span>
                    </button>
                    <button
                      onClick={() => confirmBooking(item?.id)}
                      type="button"
                      className=" px-2 py-1 space-x-1 bg-primary text-white rounded-md text-center"
                    >
                      Confirm
                    </button>
                  </div> */}
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-end space-x-4">
        <Link
          to="/"
          type="button"
          className="px-6 py-2 border rounded-md dark:border-violet-400"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default MyBooking;
