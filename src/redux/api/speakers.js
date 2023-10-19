import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const speakerApi = createApi({
  reducerPath: "speakerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["Speakers"],
  endpoints: (builder) => ({
    createSpeaker: builder.mutation({
      query: (data) => ({
        url: "/speakers",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Speakers"],
    }),
    getSpeakers: builder.query({
      query: () => `/speakers`,
      providesTags: ["Speakers"],
    }),
    getSpeakersByEvent: builder.query({
      query: (id) => `/speakers/${id}`,
      providesTags: ["Speakers"],
    }),
    getSpeaker: builder.query({
      query: (id) => `/speakers/${id}`,
      providesTags: ["Speakers"],
    }),
    editSpeaker: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/speakers/${id}`,
        method: "PATCH",
        body: rest,
      }),
      invalidatesTags: ["Speakers"],
    }),
    deleteSpeaker: builder.mutation({
      query: (id) => ({
        url: `/speakers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Speakers"],
    }),
  }),
});

export const {
  useCreateSpeakerMutation,
  useGetSpeakerQuery,
  useGetSpeakersQuery,
  useGetSpeakersByEventQuery,
  useEditSpeakerMutation,
  useDeleteSpeakerMutation,
} = speakerApi;
