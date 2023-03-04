import { createSlice } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import getMeals from './meals.thunk'

export const mealsActionTypes = {
    GET_MEALS_SUCCESS: 'GET_MEALS_SUCCESS',
    GET_MEALS_STARTED: 'GET_MEALS_STARTED',
    GET_MEALS_FAILED: 'GET_MEALS_FAILED',
}
const initialState = {
    meals: [],
    isLoading: false,
    error: '',
}

export const mealsSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {
        // getMealsFailed(state, action) {
        //   state.isLoading = false;
        //   state.error = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(getMeals.fulfilled, (state, action) => {
            state.meals = action.payload
            state.isLoading = false
            state.error = ''
        })
        builder.addCase(getMeals.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(getMeals.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})
export const mealsActions = mealsSlice.actions

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
