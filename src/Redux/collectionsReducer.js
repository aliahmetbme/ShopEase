const INITIAL_STATE={
    collections:{
        myCollection:[],
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_COLLECTIONS":
            const newCollections = {
                ...state.collections,
                [action.payload] : []
              };
            return {
                ...state,
                collections: newCollections
            };
        case "ADD_PRODUCT_COLLECTION":

            const newCollectionsState = {
                ...state.collections,
                [action.payload[1]]:[...state.collections.myCollection, action.payload[0]]
            };
    
            return {
                ...state,
                collections:newCollectionsState
            }            
        default:
            return state;
    }
};
