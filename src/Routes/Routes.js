import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import Blog from "../pages/Blog/Blog";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Users/Login";
import Register from "../Users/Register";
import PrivateRoute from "./PrivateRoute";
import HomeLayout from "../Layouts/HomeLayout";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import About from "../pages/About/About";
import Events from "../pages/Event/Events";
import EventDetails from "../pages/Event/EventDetails";
import Payment from "../pages/Payment/Payment";
import Profile from "../Dashboard/Profile/Profile";
import MyBooking from "../Dashboard/User/MyBooking";
import ConfirmBooking from "../Dashboard/User/ConfirmBooking";
import UpdateProfile from "../Users/UpdateProfile";
import AllBooking from "../Dashboard/Admin_SuperAdmin_Common/AllBooking";
import AddEvent from "../Dashboard/Admin_SuperAdmin_Common/AddEvent";
import AllEvent from "../Dashboard/Admin_SuperAdmin_Common/AllEvent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Errorpage></Errorpage>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
    ],
  },
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      { path: "/about", element: <About></About> },
      { path: "/categories", element: <Categories></Categories> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/products/:categoryName",
        loader: async ({ params }) =>
          fetch(
            `${process.env.REACT_APP_PORT}/products/${params.categoryName}`
          ),
        element: (
          <PrivateRoute>
            <Events></Events>
          </PrivateRoute>
        ),
      },
      { path: "/payment", element: <Payment></Payment> },
      {
        path: "/payment/:title",
        loader: async ({ params }) =>
          fetch(`${process.env.REACT_APP_PORT}/order/payment/${params.title}`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem(
                "furniture-token"
              )}`,
            },
          }),
        element: <Payment></Payment>,
      },
      { path: "/event_details/:id", element: <EventDetails></EventDetails> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/dashboard/profile", element: <Profile /> },
      { path: "/dashboard/my_booking", element: <MyBooking /> },
      { path: "/dashboard/confirm_booking", element: <ConfirmBooking /> },
      { path: "/dashboard/profile", element: <Profile></Profile> },
      { path: "/dashboard/update_profile/:id", element: <UpdateProfile /> },
      { path: "/dashboard/allBookings", element: <AllBooking /> },
      { path: "/dashboard/add_event", element: <AddEvent /> },
      { path: "/dashboard/all_event", element: <AllEvent /> },
    ],
  },
]);
