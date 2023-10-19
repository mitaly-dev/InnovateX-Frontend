import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventApi = createApi({
  reducerPath: "eventApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Authorization", localStorage.getItem("token"));
      return headers;
    },
  }),

  tagTypes: ["Event"],
  endpoints: (builder) => ({
    createEvent: builder.mutation({
      query: (data) => ({
        url: "/events",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Event"],
    }),
    getEvents: builder.query({
      query: () => `/events`,
      providesTags: ["Event"],
    }),
    getEvent: builder.query({
      query: (id) => `/events/${id}`,
      providesTags: ["Event"],
    }),
    editEvent: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/events/${id}`,
        method: "PATCH",
        body: rest,
      }),
      invalidatesTags: ["Event"],
    }),
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `/events/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Event"],
    }),
    createReviewAndRating: builder.mutation({
      query: (data) => ({
        url: "/review_rating",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Event"],
    }),
    getReviewAndRatings: builder.query({
      query: (id) => `/review_rating/${id}`,
      providesTags: ["Event"],
    }),
  }),
});

export const {
  useCreateEventMutation,
  useGetEventQuery,
  useGetEventsQuery,
  useEditEventMutation,
  useDeleteEventMutation,
  useCreateReviewAndRatingMutation,
  useGetReviewAndRatingsQuery,
} = eventApi;
