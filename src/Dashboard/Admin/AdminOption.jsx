import React from "react";
import { NavLink } from "react-router-dom";

const AdminOption = () => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/allBookings"
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-secondary"
          }
        >
          Bookings
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/add_event"
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-secondary"
          }
        >
          Add Event
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/all_event"
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-secondary"
          }
        >
          All Event
        </NavLink>
      </li>{" "}
      <li>
        <NavLink
          to="/dashboard/all_users"
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-secondary"
          }
        >
          All User
        </NavLink>
      </li>
    </>
  );
};

export default AdminOption;
