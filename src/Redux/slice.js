import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    data : [],
    loading : false,
    error : "",
}
export const fetchTodos = createAsyncThunk("fetchTodos" , async (URL) => {
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
    } 
});

export default todosSlice.reducer