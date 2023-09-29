const INITIAL_STATE = {
    fav_categories: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_CATEGORIES":
            if (!state.fav_categories.includes(action.payload)) {
                return {
                    ...state,
                    fav_categories: [...state.fav_categories, action.payload]
                };
            }
            return state; 
        default:
            return state;
    }
};
