import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTestimonial = createAsyncThunk("testimonial/getTestimonial", async(_,thunkAPI) =>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const data = res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

const testimonialSlice = createSlice({
    name: "testimonial",
    initialState: { isLoading: false, testimonials: [], error: null },
    extraReducers: {
        [getTestimonial.pending]:(state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getTestimonial.fulfilled]:(state,action) =>{
            state.isLoading = false;
            state.testimonials = action.payload;
        },
        [getTestimonial.rejected]:(state,action) => {
            state.isLoading = false;
            state.testimonials = action.payload;
        }
    }
})

export default testimonialSlice.reducer;