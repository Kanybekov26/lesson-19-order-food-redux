import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackbar: {
    isOpen: false,
    massage: "",
    severity: "",
  },
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showSnackBar(state, action) {
      state.snackbar.isOpen = true;
      state.snackbar.massage = action.payload.massage;
      state.snackbar.severity = action.payload.severity;
    },
    closeSnackBar(state) {
       state.snackbar = initialState.snackbar
      },
  },
});

export const uiActions = uiSlice.actions
