import { Alert } from "react-native";

const INITIAL_STATE = {
    bag: [],
    ProductsInBagIds: []
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
        case "UPDATE_AMOUNT":
            const { id, newAmount, newPrice } = action.payload;
            if (newAmount === 0) {
                const updatedItems = state.bag.filter((item) => item.id !== id)
                return { ...state, bag: updatedItems };
            }
            const updatedItems = state.bag.map(item => {
                if (item.id === id) {
                    // Değiştirmek istediğiniz key'i güncelle

                    return { ...item, amount: newAmount, price: newPrice };
                }
                return item;
            });
            return { ...state, bag: updatedItems };
        case "CLEAN_BAG":
            return {...state, bag:[], ProductsInBagIds:[]}
        default:
            return state;
    }
};
