import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    categories : [],
    //details:[],
    loading : false,
    //loadingDetails: false,
    error : "",
   // errorDetails:"",
}

export const fetchCategories = createAsyncThunk("fetchCategories" , async (URL) => {
   const response = await axios.get(
        URL
    );
    return response.data
})

// export const fetchDetails = createAsyncThunk("fetchDetails" , async (URL) => {
//     const response = await axios.get(
//          URL
//      );
//      return response.data
//  })

const categoriesSlice = createSlice({
    name: "categoriesSlice",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchCategories.pending, (state, action) => {
            state.loading = true;
            state.error = ""
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
           state.categories = action.payload;
           state.loading = false 
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message
        })
        // builder.addCase(fetchCategories.pending, (state, action) => {
        //     state.loading = true;
        //     state.error = ""
        // })
        // builder.addCase(fetchCategories.fulfilled, (state, action) => {
        //    state.categories = action.payload;
        //    state.loading = false 
        // })
        // builder.addCase(fetchCategories.rejected, (state, action) => {
        //     state.loading = false,
        //     state.error = action.error.message
        // })
    } 
});

export default categoriesSlice.reducer