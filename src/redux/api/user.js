import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_PORT }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    insert: builder.mutation({
      query: (data) => ({
        url: "/users",
        metod: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
export const { useInsertMutation } = userApi;
