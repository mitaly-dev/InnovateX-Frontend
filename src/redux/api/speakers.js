import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const speakerApi = createApi({
  reducerPath: "speakerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://innovatex-prisma.vercel.app/api/v1",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Authorization", localStorage.getItem("token"));
      return headers;
    },
  }),
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
