import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "../../lib/FetchApi";

export const basketActionTypes = {
  ADD_ITEM_SUCCESS: "ADD_ITEM_SUCCESS",
  GET_BASKET_SUCCESS: "GET_BASKET_SUCCESS",
};

const initialState = {
  items: [],
  error: "",
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItemSuccess(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToBasket.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const basketActions = basketSlice.actions;

export const getBasket = () => async (dispatch) => {
  try {
    const { data } = await fetchApi("basket");
    dispatch(basketActions.addItemSuccess(data.items));
  } catch (error) {
    console.log(error);
  }
};

export const addToBasket = createAsyncThunk(
  "basket/addToBasket",
  async (newItem, { dispatch, rejectWithValue }) => {
    try {
      await fetchApi(`foods/${newItem.id}/addToBasket`, {
        method: "POST",
        body: { amount: newItem.amount },
      });
      dispatch(getBasket());
    } catch (error) {
      return rejectWithValue("Some thing wen wrong");
    }
  }
);

export const updateBasketItem =
  ({ id, amount }) =>
  async (dispatch) => {
    try {
      await fetchApi(`basketItem/${id}/update`, {
        method: "PUT",
        body: { amount },
      });
      dispatch(getBasket());
    } catch (error) {
      console.log(error);
    }
  };

export const deleteBasketItem = (id) => async (dispatch) => {
  try {
    await fetchApi(`basketItem/${id}/delete`, {
      method: "DELETE",
    });
    dispatch(getBasket());
  } catch (error) {
    console.log(error);
  }
};

export const submitOrder = createAsyncThunk(
  "basket/submitOrder",
  async ({orderData}, { dispatch, rejectWithValue }) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        body: orderData,
      });
      dispatch(getBasket());
    } catch (error) {
      return rejectWithValue("Some thing wen wrong");
    }
  }
);
