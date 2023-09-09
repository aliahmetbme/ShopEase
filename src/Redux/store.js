import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./productSlice"
import categoriesSlice from "./categoriesSlice";
import categoryReducer from "./categoryReducer";
import favoritesReducer from "./favoritesReducer";

export default configureStore({
    reducer :{
        todos: todosSlice,
        category : categoryReducer,
        categories: categoriesSlice,
        favorites:  favoritesReducer,
    }        
})