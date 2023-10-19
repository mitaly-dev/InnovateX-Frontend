import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    createCategories: builder.mutation({
      query: (data) => ({
        url: "/categories",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),
    getCategories: builder.query({
      query: () => `/categories`,
      providesTags: ["Category"],
    }),
    getCategory: builder.query({
      query: (id) => `/categories/${id}`,
      providesTags: ["Category"],
    }),
    editCategory: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/categories/${id}`,
        method: "PATCH",
        body: rest,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useCreateCategoriesMutation,
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useEditCategoryMutation,
  useDeleteCategoryMutation,
} = categoriesApi;
