import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://innovatex-prisma.vercel.app/api/v1",
  }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (data) => ({
        url: "/carts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Cart"],
    }),
    removeCart: builder.mutation({
      query: (id) => ({
        url: `/carts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const { useAddToCartMutation, useRemoveCartMutation } = cartApi;
