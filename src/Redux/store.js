import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./productSlice"
import categoriesSlice from "./categoriesSlice";
import categoryReducer from "./categoryReducer";
import favoritesReducer from "./favoritesReducer";
import collectionsReducer from "./collectionsReducer";
import bagReducer from "./bagReducer";
import loginReducer from "./loginReducer";

export default configureStore({
    reducer :{
        todos: todosSlice,
        category : categoryReducer,
        categories: categoriesSlice,
        favorites:  favoritesReducer,
        collections : collectionsReducer,
        bag: bagReducer,
        login: loginReducer
    }        
})