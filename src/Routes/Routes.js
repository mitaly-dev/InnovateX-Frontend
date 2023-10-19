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
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/Products/ProductDetails";
import Payment from "../pages/Payment/Payment";

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
            <Products></Products>
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
      { path: "/productDetails", element: <ProductDetails></ProductDetails> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [{ path: "/dashboard", element: <Dashboard></Dashboard> }],
  },
]);
