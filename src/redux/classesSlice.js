import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getclasses = createAsyncThunk("class/getClases", async (_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res  = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const data = res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

export const addClasses = createAsyncThunk("class/getClasses", async(classdata,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.post('http://localhost:3005/Classes',classdata);
        const data = res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

export const getOneClass = createAsyncThunk("class/getOneClass", async(id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        const data = res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

export const updateClass = createAsyncThunk("class/updateClass", async(id,classdata,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.patch('http://localhost:3005/Classes/' + id,classdata)
        const data = res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

export const deleteClass = createAsyncThunk("class/deleteClass", async(id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        await axios.delete('http://localhost:3005/Classes/' + id)
        return id;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

const classSlice = createSlice({
    name:"class",
    initialState: { isLoading: false, classes:[], error: null },
    extraReducers: {
        [getclasses.pending]:(state,action) => {
            state.isLoading = true;
            state.error =null;
        },
        [getclasses.fulfilled]:(state,action) => {
            state.isLoading = false;
            state.classes = action.payload;
        },
        [getclasses.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addClasses.pending]:(state,action) => {
            state.isLoading = true;
            state.error =null;
        },
        [addClasses.fulfilled]:(state,action) => {
            state.isLoading = false;
            state.classes = action.payload;
        },
        [addClasses.rejected]: (state,action) => {
            state.isLoading = false;
            state.error.push(action.payload);
        },
        [getOneClass.pending]:(state,action) => {
            state.isLoading = true;
            state.error =null;
        },
        [getOneClass.fulfilled]:(state,action) => {
            state.isLoading = false;
            state.classes = action.payload;
        },
        [getOneClass.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [updateClass.pending]:(state,action) => {
            state.isLoading = true;
            state.error =null;
        },
        [updateClass.fulfilled]:(state,action) => {
            state.isLoading = false;
            state.classes[action.payload.id] = action.payload;
        },
        [updateClass.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteClass.pending]:(state,action) => {
            state.isLoading = true;
            state.error =null;
        },
        [deleteClass.fulfilled]:(state,action) => {
            state.isLoading = false;
            state.classes.filter(el => el.id !== action.payload);
        },
        [deleteClass.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export default classSlice.reducer;