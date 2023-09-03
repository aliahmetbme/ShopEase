import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./slice"
import categoryReducer from "./categoryReducer";

export default configureStore({
    reducer :{
        todos: todosSlice,
        category : categoryReducer,
    }
})