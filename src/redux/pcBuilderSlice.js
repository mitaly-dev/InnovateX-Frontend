import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategories: [],
  category: "",
};

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addComponentForPCBuilder: (state, action) => {
      state.selectedCategories = [...state.selectedCategories, action.payload];
    },
    selectCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { addComponentForPCBuilder, selectCategory } =
  pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
