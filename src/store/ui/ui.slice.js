import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    themeMode: 'light',
    snackbar: {
        isOpen: false,
        massage: '',
        severity: '',
    },
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        showSnackBar(state, action) {
            state.snackbar.isOpen = true
            state.snackbar.massage = action.payload.massage
            state.snackbar.severity = action.payload.severity
        },
        closeSnackBar(state) {
            state.snackbar = initialState.snackbar
        },
        changeTheme(state, action) {
            state.themeMode = action.payload
        },
    },
})

export const uiActions = uiSlice.actions
