import React from "react";
import { NavLink } from "react-router-dom";

const SuperAdminOption = () => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/addAdmin"
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-secondary"
          }
        >
          Add Admin
        </NavLink>
      </li>
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
      </li>
    </>
  );
};

export default SuperAdminOption;
