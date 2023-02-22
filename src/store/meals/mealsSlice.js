import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "../../lib/FetchApi";

export const mealsActionTypes = {
  GET_MEALS_SUCCESS: "GET_MEALS_SUCCESS",
  GET_MEALS_STARTED: "GET_MEALS_STARTED",
  GET_MEALS_FAILED: "GET_MEALS_FAILED",
};
const initialState = {
  meals: [],
  isLoading: false,
  error: "",
};

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    // getMealsFailed(state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getMeals.fulfilled,(state,action) => {
      state.meals = action.payload;
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(getMeals.pending,(state,action) => {
      state.isLoading = true;
    });

    builder.addCase(getMeals.rejected,(state,action) => {
      state.isLoading = false;
      state.error = action.payload
    });
    
  }
});
export const mealsActions = mealsSlice.actions;

export const getMeals = createAsyncThunk(
  "meals/getMealse",
  async (payload, { dispatch ,rejectWithValue}) => {
    try {

      const { data } = await fetchApi("foodsss");
      return data
    } catch (error) {
     return rejectWithValue("Some thing went wrong ")
    }
  }
);

// export const getMeals = () => {
//   return async (dispatch) => {
//     try {
//       dispatch(mealsActions. getMealsStarted());

//       const { data } = await fetchApi("foods");
//       dispatch(mealsActions.getMealsSuccess(data));
//     } catch (error) {
//       dispatch(
//         mealsActions.getMealsFailed("Something went wrong")

//       );
//     }
//   };
// };
