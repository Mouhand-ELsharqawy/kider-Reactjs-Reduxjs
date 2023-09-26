import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAppointment = createAsyncThunk("appointment/getAppointment", async(_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('http://localhost:3005/Appointment');
        const data = res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})


export const addAppointment = createAsyncThunk("appointment/addAppointment", 
        async(appointdata,thunkAPI) => {
            const { rejectWithValue } = thunkAPI;
            try{
                const res = await axios.post('http://localhost:3005/Appointment',appointdata);
                const data = res.data;
                return data;
            }catch(error){
                return rejectWithValue(error.message);
            }
})

export const deleteAppointment = createAsyncThunk("appointment/deleteAppointment", async(id,thunkAPI) =>{
    const { rejectWithValue } = thunkAPI;
    try{
        await axios.delete('http://localhost:3005/Appointment/'+id);
        return id;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

const appointmentSlice = createSlice({
    name: "appointment",
    initialState: { isLoading: false , appoints:[], error: null },
    extraReducers: {
        [getAppointment.pending]:(state,action) =>{
            state.isLoading = true;
            state.error = null
        },
        [getAppointment.fulfilled]:(state,action) => {
            state.isLoading = false;
            state.appoints = action.payload;
        },
        [getAppointment.rejected]:(state,action) =>{
            state.isLoading = false;
            state.error = action.payload;
        },
        [addAppointment.pending]:(state,action) =>{
            state.isLoading = true;
            state.error = null
        },
        [addAppointment.fulfilled]:(state,action) => {
            state.isLoading = false;
            state.appoints.push(action.payload);
        },
        [addAppointment.rejected]:(state,action) =>{
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteAppointment.pending]:(state,action) =>{
            state.isLoading = true;
            state.error = null
        },
        [deleteAppointment.fulfilled]:(state,action) => {
            state.isLoading = false;
            state.appoints = state.appoints.filter(el => el.id !== action.payload)
        },
        [deleteAppointment.rejected]:(state,action) =>{
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export default appointmentSlice.reducer;