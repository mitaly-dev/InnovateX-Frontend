import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../API/imageUpload";
import toast from "react-hot-toast";
import { useTitle } from "../../Hook/useTitle";
import { useState } from "react";
import { useEffect } from "react";
import { useCreateUserMutation } from "../../redux/api/auth";
import { useCreateEventMutation } from "../../redux/api/events";

const AddEvent = () => {
  const [createEvent, { data, isSuccess, isError, error }] =
    useCreateEventMutation();

  useTitle("Register");
  const [load, setLoad] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isSuccess) {
      setLoad(false);
      toast.success("Event Added successfull", { duration: 1200 });
    }
    if (isError) {
      setLoad(false);
      toast.error(error?.data?.message, { duration: 1200 });
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addEventHandle = (data) => {
    setLoad(true);
    const title = data.title;
    const description = data.description;
    const price = data.price;
    const totalSeats = data.totalSeats;
    const availableSeats = data.availableSeats;
    const eventDate = data.eventDate;
    const location = data.location;
    const imageUrl = data.imageUrl[0];

    const formData = new FormData();
    formData.append("image", imageUrl);

    imageUpload(formData)
      .then((data) => {
        if (data.success) {
          //reset();
          const photo = data.data.display_url;
          const event = {
            title,
            description,
            price: parseInt(price),
            totalSeats: parseInt(totalSeats),
            availableSeats: parseInt(availableSeats),
            eventDate,
            location,
            imageUrl: photo,
          };
          console.log(event);
          createEvent(event);
          reset();
        }
      })
      .catch((error) => {
        setLoad(false);
      });
  };
  return (
    <div className="relative">
      <div className="relative bg-opacity-75">
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl xl:px-8 xl:w-12/12 m-auto">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <div className="flex justify-between mb-4">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Add Event
                  </h3>
                </div>
                <form
                  onSubmit={handleSubmit(addEventHandle)}
                  className="space-y-6 ng-untouched ng-pristine ng-valid"
                >
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="title"
                      className="block mb-1 font-medium text-[16px]"
                    >
                      title
                    </label>
                    <input
                      {...register("title", { required: "title is required!" })}
                      type="text"
                      placeholder="Title"
                      className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm "
                    />
                    {errors?.title && (
                      <p className="text-red-600">{errors.title?.message}</p>
                    )}
                  </div>
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="description"
                      className="block mb-1 font-medium text-[16px]"
                    >
                      description
                    </label>
                    <input
                      {...register("description", {
                        required: "description is required",
                      })}
                      type="text"
                      placeholder="description"
                      className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm "
                    />
                    {errors?.description && (
                      <p className="text-red-600">
                        {errors?.description.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="price"
                      className="block mb-1 font-medium text-[16px]"
                    >
                      price
                    </label>
                    <input
                      {...register("price", {
                        required: "price is required",
                      })}
                      type="number"
                      placeholder="price"
                      className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm "
                    />
                    {errors?.price && (
                      <p className="text-red-600">{errors?.price.message}</p>
                    )}
                  </div>
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="totalSeats"
                      className="block mb-1 font-medium text-[16px]"
                    >
                      totalSeats
                    </label>
                    <input
                      {...register("totalSeats", {
                        required: "totalSeats is required",
                      })}
                      type="number"
                      placeholder="totalSeats"
                      className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm "
                    />
                    {errors?.totalSeats && (
                      <p className="text-red-600">
                        {errors?.totalSeats.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="availableSeats"
                      className="block mb-1 font-medium text-[16px]"
                    >
                      availableSeats
                    </label>
                    <input
                      {...register("availableSeats", {
                        required: "availableSeats is required",
                      })}
                      type="number"
                      placeholder="availableSeats"
                      className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm "
                    />
                    {errors?.availableSeats && (
                      <p className="text-red-600">
                        {errors?.availableSeats.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="eventDate"
                      className="block mb-1 font-medium text-[16px]"
                    >
                      eventDate
                    </label>
                    <input
                      {...register("eventDate", {
                        required: "eventDate is required",
                      })}
                      type="text"
                      placeholder="eventDate"
                      className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm "
                    />
                    {errors?.eventDate && (
                      <p className="text-red-600">
                        {errors?.eventDate.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="location"
                      className="block mb-1 font-medium text-[16px]"
                    >
                      location
                    </label>
                    <input
                      {...register("location", {
                        required: "location is required",
                      })}
                      type="text"
                      placeholder="location"
                      className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm "
                    />
                    {errors?.location && (
                      <p className="text-red-600">{errors?.location.message}</p>
                    )}
                  </div>
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="imageUrl"
                      className="block mb-1 font-medium text-[16px]"
                    >
                      Image Upload
                    </label>
                    <input
                      {...register("imageUrl", {
                        required: "imageUrl is required!",
                      })}
                      placeholder="Upload Image"
                      type="file"
                      className="file-input file-input-bordered w-full "
                    />
                    {errors?.imageUrl && (
                      <p className="text-red-600">{errors?.imageUrl.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary"
                  >
                    {load ? (
                      <span className="border-2 border-dashed border-white animate-spin w-7 h-7 rounded-full"></span>
                    ) : (
                      " Create Event"
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

export default AddEvent;
