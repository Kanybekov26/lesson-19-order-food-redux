import { createAsyncThunk } from '@reduxjs/toolkit'
import { getMaelsRequest } from '../../api/mealsServies'

const getMeals = createAsyncThunk(
    'meals/getMealse',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await getMaelsRequest()
            return data.data
        } catch (error) {
            return rejectWithValue('Some thing went wrong ')
        }
    }
)
export default getMeals
