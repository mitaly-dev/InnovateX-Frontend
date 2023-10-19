import React from "react";
import { Link, NavLink } from "react-router-dom";

const UserOption = () => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/my_booking"
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-secondary"
          }
        >
          My Booking
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/confirm_booking"
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-secondary"
          }
        >
          Confirm Booking
        </NavLink>
      </li>
    </>
  );
};

export default UserOption;
