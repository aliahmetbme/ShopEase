import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./productSlice";
import categoriesSlice from "./categoriesSlice";
import categoryReducer from "./categoryReducer";
import favoritesReducer from "./favoritesReducer";
import collectionsReducer from "./collectionsReducer";
import bagReducer from "./bagReducer";
import cardIdReducer from "./cardIdReducer";
import chosenAdressReducer from "./chosenAdressReducer";
const store = configureStore({
  reducer: {
    todos: todosSlice,
    category: categoryReducer,
    categories: categoriesSlice,
    favorites: favoritesReducer,
    collections: collectionsReducer,
    bag: bagReducer,
    id: cardIdReducer,
    adress: chosenAdressReducer
  },
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV === "development"
      ? getDefaultMiddleware({
          serializableCheck: false, // Serileştirilebilir durum kontrolünü devre dışı bırak
        })
      : getDefaultMiddleware(),
});

export default store;
