import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { imageUpload } from "../API/imageUpload";
import toast from "react-hot-toast";
import { jwtToken } from "../API/access-jwt-token";
import { dbUser } from "../API/user";
import { useTitle } from "../Hook/useTitle";
import { useState } from "react";
import { useEffect } from "react";
import { useCreateUserMutation, useSignInMutation } from "../redux/api/auth";
import { useEditUserMutation, useGetUserQuery } from "../redux/api/user";

const UpdateProfile = () => {
  const { id } = useParams();
  const { data: user } = useGetUserQuery(id);

  const [createUser, { isSuccess, isError, error }] = useCreateUserMutation();
  const [editUser, { data, isSuccess: editSuccess }] = useEditUserMutation();

  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    setProfileInfo(user?.data);
  }, [user]);
  console.log("ppppppppppppppppp profileInfo", profileInfo);
  useTitle("Update-Profile");
  const [load, setLoad] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      setLoad(false);
      toast.success("Signup successfull", { duration: 1200 });
      navigate("/login");
    }
    if (isError) {
      setLoad(false);
      toast.error(error?.data?.message, { duration: 1200 });
    }
    if (editSuccess) {
      setLoad(false);
      toast.success("profile update successfull!", { duration: 1200 });
    }
  }, [isSuccess, isError, editSuccess]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateProfile = (e) => {
    e.preventDefault();
    setLoad(true);

    const data = {
      name: profileInfo?.name,
      email: profileInfo?.email,
      profileImg: profileInfo?.profileImg,
    };

    editUser({
      id,
      data,
    });
  };
  return (
    <div className="relative">
      <div className="relative  bg-opacity-75">
        <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl xl:px-8 xl:w-7/12 m-auto">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <div className="flex justify-between mb-4">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Update Profile
                  </h3>
                </div>
                <form
                  onSubmit={(e) => updateProfile(e)}
                  className="space-y-6 ng-untouched ng-pristine ng-valid"
                >
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="name"
                      className="block mb-1 font-medium text-[16px]"
                    >
                      Name
                    </label>
                    <input
                      value={profileInfo?.name}
                      onChange={(e) =>
                        setProfileInfo({ ...profileInfo, name: e.target.value })
                      }
                      type="text"
                      placeholder="Name"
                      className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm "
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="email"
                      className="block mb-1 font-medium text-[16px]"
                    >
                      Email
                    </label>
                    <input
                      value={profileInfo?.email}
                      onChange={(e) =>
                        setProfileInfo({
                          ...profileInfo,
                          email: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="Email"
                      className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm "
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="profile_image"
                      className="block mb-1 font-medium text-[16px]"
                    >
                      profile image
                    </label>
                    <input
                      value={profileInfo?.profileImg}
                      onChange={(e) =>
                        setProfileInfo({
                          ...profileInfo,
                          profileImg: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="Name"
                      className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm "
                    />
                  </div>

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

export default UpdateProfile;
