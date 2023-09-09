import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    data : [],
    detailedData: [],
    loading : false,
    loadingDetails: false,
    error : "",
    errorAboutDetail: ""
}
export const fetchTodos = createAsyncThunk("fetchTodos" , async (URL) => {
   const response = await axios.get(
        URL
    );
    return response.data
})

export const fetchDetails = createAsyncThunk("fetchDetails" , async (URL) => {
    const response = await axios.get(
         URL
     );
     return response.data
 })

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.loading = true;
            state.error = ""
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
           state.data = action.payload;
           state.loading = false 
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message
        })
        builder.addCase(fetchDetails.pending, (state, action) => {
            state.loadingDetails = true;
            state.errorAboutDetail = ""
        })
        builder.addCase(fetchDetails.fulfilled, (state, action) => {
           state.detailedData = action.payload;
           state.loadingDetails = false 
        })
        builder.addCase(fetchDetails.rejected, (state, action) => {
            state.loadingDetails = false,
            state.errorAboutDetail = action.error.message
        })
    } 
});

export default todosSlice.reducer