import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://innovatex-prisma.vercel.app/api/v1",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Authorization", localStorage.getItem("token"));
      return headers;
    },
  }),

  tagTypes: ["Booking"],
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Booking"],
    }),
    getBookings: builder.query({
      query: () => `/bookings`,
      providesTags: ["Booking"],
    }),
    getBooking: builder.query({
      query: (id) => `/bookings/${id}`,
      providesTags: ["Booking"],
    }),
    updateBooking: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/bookings/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Booking"],
    }),
    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Booking"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetBookingQuery,
  useGetBookingsQuery,
  useDeleteBookingMutation,
  useUpdateBookingMutation,
} = bookingApi;
