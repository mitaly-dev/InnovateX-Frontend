import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    // login: loginUserReducer,
    // [builderApi.reducerPath]: builderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      // builderApi.middleware,
    ]),
});

export default store;
