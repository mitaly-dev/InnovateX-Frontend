import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import toast from "react-hot-toast";
import { useTitle } from "../../Hook/useTitle";
import { useState } from "react";
import { useEffect } from "react";
import { useEditEventMutation, useGetEventQuery } from "../../redux/api/events";
import { useEditUserMutation } from "../../redux/api/user";

const EditEvent = () => {
  const { id } = useParams();
  const { data: event } = useGetEventQuery(id);

  const [editEvent, { data, isSuccess, isError, error }] =
    useEditEventMutation();

  const [eventInfo, setEventInfo] = useState({});

  useEffect(() => {
    setEventInfo(event?.data);
  }, [event]);

  useTitle("Update-Profile");
  const [load, setLoad] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      setLoad(false);
      toast.success("Event update successfull", { duration: 1200 });
    }
    if (isError) {
      setLoad(false);
      toast.error(error?.data?.message, { duration: 1200 });
    }
  }, [isSuccess, isError]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateEvent = (e) => {
    e.preventDefault();
    setLoad(true);

    const data = {
      ...eventInfo,
    };

    editEvent({
      id,
      data,
    });
  };
  return (
    <div className="relative">
      <div className="relative  bg-opacity-75">
        <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl xl:px-8 xl:w-12/12 m-auto">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <div className="flex justify-between mbeventInfo-4">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Update Event
                  </h3>
                </div>
                <form
                  onSubmit={(e) => updateEvent(e)}
                  className="space-y-6 ng-untouched ng-pristine ng-valid"
                >
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="name"
                      className="block mb-1 font-medium text-[16px]"
                    >
                      Title
                    </label>
                    <input
                      value={eventInfo?.title}
                      onChange={(e) =>
                        setEventInfo({ ...eventInfo, title: e.target.value })
                      }
                      type="text"
                      placeholder="Title"
                      className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm "
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="description"
                      className="block mb-1 font-medium text-[16px]"
                    >
                      Description
                    </label>
                    <input
                      value={eventInfo?.description}
                      onChange={(e) =>
                        setEventInfo({
                          ...eventInfo,
                          description: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="description"
                      className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm "
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="imageUrl"
                      className="block mb-1 font-medium text-[16px]"
                    >
                      Evemt image
                    </label>
                    <input
                      value={eventInfo?.imageUrl}
                      onChange={(e) =>
                        setEventInfo({
                          ...eventInfo,
                          imageUrl: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="Name"
                      className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm "
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="price"
                      className="block mb-1 font-medium text-[16px]"
                    >
                      Price
                    </label>
                    <input
                      value={eventInfo?.price}
                      onChange={(e) =>
                        setEventInfo({
                          ...eventInfo,
                          price: parseInt(e.target.value),
                        })
                      }
                      type="number"
                      placeholder="Name"
                      className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm "
                    />
                  </div>{" "}
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="totalSeats"
                      className="block mb-1 font-medium text-[16px]"
                    >
                      Total Seats
                    </label>
                    <input
                      value={eventInfo?.totalSeats}
                      onChange={(e) =>
                        setEventInfo({
                          ...eventInfo,
                          totalSeats: parseInt(e.target.value),
                        })
                      }
                      type="number"
                      placeholder="totalseats"
                      className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm "
                    />
                  </div>{" "}
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="availableSeats"
                      className="block mb-1 font-medium text-[16px]"
                    >
                      Available Seats
                    </label>
                    <input
                      value={eventInfo?.availableSeats}
                      onChange={(e) =>
                        setEventInfo({
                          ...eventInfo,
                          availableSeats: parseInt(e.target.value),
                        })
                      }
                      type="number"
                      placeholder="availableSeats"
                      className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm "
                    />
                  </div>{" "}
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="location"
                      className="block mb-1 font-medium text-[16px]"
                    >
                      Location
                    </label>
                    <input
                      value={eventInfo?.location}
                      onChange={(e) =>
                        setEventInfo({
                          ...eventInfo,
                          location: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="location"
                      className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm "
                    />
                  </div>{" "}
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary"
                  >
                    {load ? (
                      <span className="border-2 border-dashed border-white animate-spin w-7 h-7 rounded-full"></span>
                    ) : (
                      "Update"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEvent;
