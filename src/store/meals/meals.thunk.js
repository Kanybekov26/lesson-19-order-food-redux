import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchApi } from '../../lib/FetchApi'

const getMeals = createAsyncThunk(
    'meals/getMealse',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await fetchApi('foods')
            return data
        } catch (error) {
            return rejectWithValue('Some thing went wrong ')
        }
    }
)
export default getMeals
