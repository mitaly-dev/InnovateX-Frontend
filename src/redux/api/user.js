import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://innovatex-prisma.vercel.app/api/v1",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Authorization", localStorage.getItem("token"));
      return headers;
    },
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users`,
      providesTags: ["Users"],
    }),
    getUser: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: ["Users"],
    }),
    editUser: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetUsersQuery,
  useEditUserMutation,
  useDeleteUserMutation,
} = userApi;
