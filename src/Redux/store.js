import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./slice"

export default configureStore({
    reducer :{
        todos: todosSlice,
    }
})