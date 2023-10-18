// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const builderApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
  tageTypes: ["Auth"],
  endpoints: (builder) => ({
    singUp: builder.mutation({
      query: (name) => ({
        url: "/auth/signup",
        method: "POST",
        body: name,
      }),
      invalidatesTags: ["Auth"],
    }),
    signIn: builder.mutation({
      query: (name) => ({
        url: "/auth/signin",
        method: "POST",
        body: name,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = builderApi;
