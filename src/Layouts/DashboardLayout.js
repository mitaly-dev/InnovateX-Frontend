import React from "react";
import { Link, Outlet } from "react-router-dom";
import Spinner from "../Components/Spinner";
import useRole from "../Hook/useRole";
import Navbar from "../Components/Navbar";
import AdminOption from "../Dashboard/Admin/AdminOption";
import { getUserInfo } from "../utils/local-storage";
import UserOption from "../Dashboard/User/UserOption";
import SuperAdminOption from "../Dashboard/SuperAdmin/SuperAdminOption";

const DashboardLayout = () => {
  const user = getUserInfo();

  return (
    <div>
      <Navbar />
      <div>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-end justify-start md::justify-center bg-accent">
            <div className="flex justify-end">
              <label
                htmlFor="my-drawer-2"
                className="btn bg-primary border-none drawer-button lg:hidden mr-5 sm:mr-10"
              >
                Menu
              </label>
            </div>
            <div className="w-full lg:mt-16 h-full">
              <Outlet></Outlet>
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 space-y-0 w-80 bg-base-100 text-base-content text-lg font-semibold pl-16 font-roboto capitalize">
              {user?.userId && (
                <>
                  <li>
                    <div className="grid grid-cols-1">
                      <img
                        src={
                          user?.profileImg
                            ? user?.profileImg
                            : "https://i.ibb.co/NTrmJDv/cat.jpg"
                        }
                        alt=""
                        className="w-24 h-24 object-cover border-2 rounded-full p-2"
                      />
                      <h3 className="text-secondary text-xl mb-5">
                        {user?.displayName} {`(${user?.role})`}
                      </h3>
                    </div>
                  </li>
                  <li>
                    <Link to="/dashboard/profile">Profile</Link>
                  </li>
                </>
              )}
              {user?.role === "user" && <UserOption />}
              {user?.role === "super_admin" && <SuperAdminOption />}
              {user?.role === "admin" && <AdminOption />}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
