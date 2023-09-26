import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addContact = createAsyncThunk("contact/addContact", async(contactdata,thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try{
        const res =  await axios.post('http://localhost:3005/contact',contactdata);
        const data = res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
});

const constactSlice = createSlice({
    name: "contact",
    initialState: { isLoading: false, contact:[], error:null },
    extraReducers: {
        [addContact.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null
        },
        [addContact.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.contact.push(action.payload);
        },
        [addContact.rejected]:(state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default constactSlice.reducer;