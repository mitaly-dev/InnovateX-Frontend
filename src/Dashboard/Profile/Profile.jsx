import React from "react";
import { getUserInfo } from "../../utils/local-storage";
import { useGetUserQuery } from "../../redux/api/user";
import { Link } from "react-router-dom";

const Profile = () => {
  const userInfo = getUserInfo();
  const { data: user } = useGetUserQuery(userInfo?.userId);
  return (
    <div className="flex max-w-3xl m-auto p-6 space-y-4 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex min-h-[60vh] flex-col items-center text-green-700 space-y-3">
        <div className="rounded-full  w-32 h-32">
          <img
            src={user?.data?.profileImg}
            alt="userImage"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <h3 className="font-semibold text-lg">Name : {user?.data?.name}</h3>
        <h3 className="font-semibold text-lg">email : {user?.data?.email}</h3>
      </div>
      <div>
        <Link
          to={`/dashboard/update_profile/${userInfo?.userId}`}
          className="border px-2 py-1 rounded-lg"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default Profile;
