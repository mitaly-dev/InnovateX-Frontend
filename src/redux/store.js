import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth";
import { categoriesApi } from "./api/categories";
import { eventApi } from "./api/events";
import { speakerApi } from "./api/speakers";
import { userApi } from "./api/user";
import { bookingApi } from "./api/booking";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [eventApi.reducerPath]: eventApi.reducer,
    [speakerApi.reducerPath]: speakerApi.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      categoriesApi.middleware,
      eventApi.middleware,
      speakerApi.middleware,
      bookingApi.middleware
    ), // Add the authApi middleware
});

export default store;
