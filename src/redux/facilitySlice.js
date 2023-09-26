import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getfacilities = createAsyncThunk('facility/getFacilities', async(_,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const data = res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
}) 

export const addFacility = createAsyncThunk("facikity/addFacility", async (facilitydata,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.post('http://localhost:3005/Facility',facilitydata);
        const data = res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})


export const getOneFacility = createAsyncThunk("facility/getOneFacility",async(id,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id);
        const data = res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

export const updateFacility = createAsyncThunk("facility/updateFacility",async(id,facilitydata,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.patch('http://localhost:3005/Facility/'+id,facilitydata);
        const data = res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})


export const deleteFacility = createAsyncThunk("facility/deleteFacility", async(id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        await axios.delete('http://localhost:3005/Facility/'+id);
        return id;
    }catch(error){
        return rejectWithValue(error.message);
    }
})
const facilitySlice = createSlice({
    name: "facility",
    initialState: { isLoading: false, facilities: [], error: null },
    extraReducers: {
        [getfacilities.pending]: (state,acttion) =>{
            state.isLoading = true;
            state.error = null;
        },
        [getfacilities.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.facilities = action.payload;
        },
        [getfacilities.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addFacility.pending]: (state,acttion) =>{
            state.isLoading = true;
            state.error = null;
        },
        [addFacility.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.facilities.push(action.payload);
        },
        [addFacility.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [getOneFacility.pending]: (state,acttion) =>{
            state.isLoading = true;
            state.error = null;
        },
        [getOneFacility.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.facilities = action.payload;
        },
        [getOneFacility.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [updateFacility.pending]: (state,acttion) =>{
            state.isLoading = true;
            state.error = null;
        },
        [updateFacility.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.facilities[action.payload.id] = action.payload;
        },
        [updateFacility.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteFacility.pending]: (state,acttion) =>{
            state.isLoading = true;
            state.error = null;
        },
        [deleteFacility.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.facilities = state.facilities.filter( el => el.id !== action.payload);
        },
        [deleteFacility.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default facilitySlice.reducer;