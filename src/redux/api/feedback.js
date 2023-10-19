import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const feedbackApi = createApi({
  reducerPath: "feedbackApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Authorization", localStorage.getItem("token"));
      return headers;
    },
  }),
  tagTypes: ["Feedback"],
  endpoints: (builder) => ({
    createFeedback: builder.mutation({
      query: (data) => ({
        url: "/feedbacks",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Feedback"],
    }),
    getFeedbacks: builder.query({
      query: () => `/feedbacks`,
      providesTags: ["Feedback"],
    }),
  }),
});

export const { useCreateFeedbackMutation, useGetFeedbacksQuery } = feedbackApi;
