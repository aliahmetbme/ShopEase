const INITIAL_STATE = {
    favorites: [],
    favoritesProductsIds: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case "ADD_FAVORITES":
            if (!state.favoritesProductsIds.includes(action.payload.id)){
                return {
                    ...state,
                    favoritesProductsIds : [...state.favoritesProductsIds, action.payload.id],
                    favorites: [...state.favorites, action.payload]
                };
            }
            return state

        case "REMOVE_FAVORITES":
                if (state.favorites.includes(action.payload)) {
                    return {
                        ...state,
                        favorites: state.favorites.filter(item => item !== action.payload)
                    };
                }
                return state;  // Eğer action.payload zaten dizide varsa, state'i değiştirme
        default:
            return state;
    }
};
