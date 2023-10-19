import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth";
import { categoriesApi } from "./api/categories";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, categoriesApi.middleware), // Add the authApi middleware
});

export default store;
