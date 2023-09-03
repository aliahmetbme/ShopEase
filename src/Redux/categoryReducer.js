const INITAL_STATE = {
    fav_categories : []
}

export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case "SET_CATEGORIES":
            return {...state, fav_categories: [...state.fav_categories, action.payload]}
        default :
            return state
    }
}