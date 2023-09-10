const INITIAL_STATE = {
    bag:[],
    ProductsInBagIds:[]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_BAG":
            if (!state.ProductsInBagIds.includes(action.payload.id)) {
                return {
                    ...state,
                    bag: [...state.bag, action.payload],
                    ProductsInBagIds: [...state.ProductsInBagIds, action.payload.id]
                };
            }
            return state; // Eğer action.payload zaten dizide varsa, state'i değiştirme
        // case 'UPDATE_ITEM_VALUE':
        //     const { itemId, newKeyValue } = action.payload;
        //     const updatedItems = state.bag.map(item => {
        //     if (item.id === itemId) {
        //         // Değiştirmek istediğiniz key'i güncelle
        //         return { ...item, amount: newKeyValue };
        //     }
        //        return item;
        //     }); 
        //    return { ...state, bag: updatedItems };
        default:
            return state;
    }
};
