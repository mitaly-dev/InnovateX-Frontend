import React from "react";
import { useQuery } from "@tanstack/react-query";
import Order from "../MyOrders/Order";
import Spinner from "../../../../Components/Spinner";
import NotFoundProduct from "../../../../Components/NotFoundProduct";
import { useTitle } from "../../../../Hook/useTitle";

const WishList = () => {
  useTitle("Wishlist");
  const user = {};
  const {
    data: wishList = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["/wishList", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_PORT}/wishList?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem(`furniture-token`)}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (wishList.length === 0) {
    return <NotFoundProduct></NotFoundProduct>;
  }
  return (
    <div className="flex flex-col max-w-3xl m-auto p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <ul className="flex flex-col divide-y divide-gray-700">
        {wishList.map((order) => (
          <Order key={order._id} order={order}></Order>
        ))}
      </ul>
    </div>
  );
};

export default WishList;
