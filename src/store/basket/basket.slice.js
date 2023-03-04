// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { fetchApi } from '../../lib/FetchApi'

// export const basketActionTypes = {
//     ADD_ITEM_SUCCESS: 'ADD_ITEM_SUCCESS',
//     GET_BASKET_SUCCESS: 'GET_BASKET_SUCCESS',
// }

// const initialState = {
//     items: [],
//     error: '',
// }

// export const getBasket = () => async (dispatch) => {
//     try {
//         const { data } = await fetchApi('basket')
//         dispatch(basketActions.addItemSuccess(data.items))
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const addToBasket = createAsyncThunk(
//     'basket/addToBasket',
//     async (newItem, { dispatch, rejectWithValue }) => {
//         try {
//             await fetchApi(`foods/${newItem.id}/addToBasket`, {
//                 method: 'POST',
//                 body: { amount: newItem.amount },
//             })
//             return dispatch(getBasket())
//         } catch (error) {
//             return rejectWithValue('Some thing wen wrong')
//         }
//     }
// )

// export const updateBasketItem =
//     ({ id, amount }) =>
//     async (dispatch) => {
//         try {
//             await fetchApi(`basketItem/${id}/update`, {
//                 method: 'PUT',
//                 body: { amount },
//             })
//             dispatch(getBasket())
//         } catch (error) {
//             console.log(error)
//         }
//     }

// export const deleteBasketItem = (id) => async (dispatch) => {
//     try {
//         await fetchApi(`basketItem/${id}/delete`, {
//             method: 'DELETE',
//         })
//         dispatch(getBasket())
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const submitOrder = createAsyncThunk(
//     'basket/submitOrder',
//     async ({ orderData }, { dispatch, rejectWithValue }) => {
//         try {
//             await fetch(`https://jsonplaceholder.typicode.com/posts`, {
//                 method: 'POST',
//                 body: orderData,
//             })
//             return dispatch(getBasket())
//         } catch (error) {
//             return rejectWithValue('Some thing wen wrong')
//         }
//     }
// )

// export const basketSlice = createSlice({
//     name: 'basket',
//     initialState,
//     reducers: {
//         addItemSuccess(state, action) {
//             state.items = action.payload
//         },
//     },
//     extraReducers: (builder) => {
//         builder.addCase(addToBasket.rejected, (state, action) => {
//             state.error = action.payload
//         })
//     },
// })

// export const basketActions = basketSlice.actions

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
    addToBasketRequest,
    deleteBasketItemRequest,
    getBasketRequest,
    submitOrderRequest,
    updateBasketItemRequest,
} from '../../api/mealsServies'

const initialState = {
    items: [],
    error: '',
}

export const getBasket = createAsyncThunk(
    'basket/getBasket',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getBasketRequest()
            return data.data.items
        } catch (error) {
            return rejectWithValue('Something went wrong')
        }
    }
)

export const addToBasket = createAsyncThunk(
    'basket/addToBasket',
    async (newItem, { dispatch, rejectWithValue }) => {
        try {
            const { data } = await addToBasketRequest(newItem)

            dispatch(getBasket())
            return data.data.items
        } catch (error) {
            return rejectWithValue('Some thing wen basket')
        }
    }
)

export const updateBasketItem = createAsyncThunk(
    'basket/updateBasketItem',
    async ({ id, amount }, { dispatch, rejectWithValue }) => {
        try {
            const { data } = await updateBasketItemRequest(id, amount)
            dispatch(getBasket())
            return data.data.items
        } catch (error) {
            return rejectWithValue('Something went wrong')
        }
    }
)

export const deleteBasketItem = createAsyncThunk(
    'basket/deleteBasketItem',
    async (id, { dispatch, rejectWithValue }) => {
        try {
            await deleteBasketItemRequest(id)

            dispatch(getBasket())
        } catch (error) {
            rejectWithValue('Something went wrong')
        }
    }
)

export const submitOrder = createAsyncThunk(
    'basket/submitOrder',
    async ({ orderData }, { dispatch, rejectWithValue }) => {
        try {
            await submitOrderRequest(orderData)

            return dispatch(getBasket())
        } catch (error) {
            return rejectWithValue('Something went wrong')
        }
    }
)

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        getBasketSuccess(state, action) {
            state.items = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addToBasket.rejected, (state, action) => {
            state.error = action.payload
        })
        builder.addCase(updateBasketItem.rejected, (state, action) => {
            state.error = action.payload
        })
        builder.addCase(deleteBasketItem.rejected, (state, action) => {
            state.error = action.payload
        })
        builder.addCase(getBasket.fulfilled, (state, action) => {
            state.items = action.payload
            state.isLoading = false
            state.error = ''
        })
        builder.addCase(getBasket.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getBasket.rejected, (state, action) => {
            state.items = action.payload
            state.isLoading = false
        })
    },
})

export const basketAction = basketSlice.actions
