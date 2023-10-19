import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventApi = createApi({
  reducerPath: "eventApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["Event"],
  endpoints: (builder) => ({
    createCategories: builder.mutation({
      query: (data) => ({
        url: "/categories",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Event"],
    }),
    getCategories: builder.query({
      query: () => `/categories`,
      providesTags: ["Event"],
    }),
    getCategory: builder.query({
      query: (id) => `/categories/${id}`,
      providesTags: ["Event"],
    }),
    editCategory: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/categories/${id}`,
        method: "PATCH",
        body: rest,
      }),
      invalidatesTags: ["Event"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Event"],
    }),
  }),
});

export const {
  useCreateCategoriesMutation,
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useEditCategoryMutation,
  useDeleteCategoryMutation,
} = eventApi;
