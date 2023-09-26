import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCall = createAsyncThunk("call/getCall", async (_,thunkAPI) =>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        const data = res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const addCall = createAsyncThunk("call/addCall", async(calldata,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.post('http://localhost:3005/call',calldata);
        const data = res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

export const getOneCall = createAsyncThunk("call/getOneCall", async(id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users/'+id);
        const data = res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

export const updateCall = createAsyncThunk("call/updateCall", async(id,calldata, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.patch('http://localhost:3005/call/'+id,calldata);
        const data = res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})


export const deleteCall = createAsyncThunk("call/deleteCall", async(id,thunkAPI) =>{
    const { rejectWithValue } = thunkAPI;
    try{
        await axios.delete('http://localhost:3005/call/'+id);
        return id;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

const callSlice = createSlice({
    name: "call",
    initialState: { isLoading: false, calls: [], error: null },
    extraReducers:{
        [getCall.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null
        },
        [getCall.fulfilled]: (state,action) => {
            state.isLoading = false
            state.calls = action.payload;
        },
        [getCall.rejected]:(state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addCall.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null
        },
        [addCall.fulfilled]:(state,action) => {
            state.isLoading = false;
            state.calls.push(action.payload);
        },
        [addCall.rejected]:(state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [getOneCall.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null
        },
        [getOneCall.fulfilled]:(state,action) => {
            state.isLoading = false;
            state.calls = action.payload;
        },
        [getOneCall.rejected]:(state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [updateCall.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null
        },
        [updateCall.fulfilled]:(state,action) => {
            state.isLoading = false;
            state.calls[action.payload.id] = action.payload;
        },
        [updateCall.rejected]:(state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteCall.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null
        },
        [deleteCall.fulfilled]:(state,action) => {
            state.isLoading = false;
            state.calls.filter(el => el.id !== action.payload);
        },
        [deleteCall.rejected]:(state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default callSlice.reducer;