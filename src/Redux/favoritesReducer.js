import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth"

const INITIAL_STATE = {
    favorites: [],
    favoritesProductsIds: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_FAVORITES_FROM_DB":
            favorites = action.payload
            return {
                ...state,
                favorites: favorites
            };

        case "ADD_FAVORITES":
            if (!state.favoritesProductsIds.includes(action.payload.id)) {
                database().ref(`/${auth().currentUser.uid}/`).update({
                    favorites: [...state.favorites, action.payload]
                })
                return {
                    ...state,
                    favoritesProductsIds: [...state.favoritesProductsIds, action.payload.id],
                    favorites: [...state.favorites, action.payload]
                };
            }
            return state

        case "REMOVE_FAVORITES":
            if (state.favoritesProductsIds.includes(action.payload.id)) {
                database().ref(`/${auth().currentUser.uid}/`).update({
                    favorites: state.favorites.filter(item => item.id !== action.payload.id)
                })
                return {
                    ...state,
                    favoritesProductsIds: state.favoritesProductsIds.filter(item => item !== action.payload.id),
                    favorites: state.favorites.filter(item => item.id !== action.payload.id)
                };
            }
            return state;
        default:
            return state;
    }
};
