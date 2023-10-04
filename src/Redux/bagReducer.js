import { Alert } from "react-native";
import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth"

const INITIAL_STATE = {
    bag: [],
    ProductsInBagIds: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_BAG_FROM_DB":
            const bag = action.payload

            return {
                ...state,
                bag: bag
            }; // Eğer action.payload zaten dizide varsa, state'i değiştirme
        case "ADD_BAG":
            if (!state.ProductsInBagIds.includes(action.payload.id)) {
                database().ref(`/${auth().currentUser.uid}/`).update({
                    bag: [...state.bag, action.payload]
                })
                return {
                    ...state,
                    bag: [...state.bag, action.payload],
                    ProductsInBagIds: [...state.ProductsInBagIds, action.payload.id]
                };
            }
            return state; // Eğer action.payload zaten dizide varsa, state'i değiştirme
        // case "UPDATE_AMOUNT":
        //     const { id, newAmount, newPrice } = action.payload;
        //     if (newAmount === 0) {
        //         const updatedItems = state.bag.filter((item) => item.id !== id)

        //         return { ...state, bag: updatedItems };
        //     }
        //     const updatedItems = state.bag.map(item => {
        //         if (item.id === id) {
        //             // Değiştirmek istediğiniz key'i güncelle

        //             return { ...item, amount: newAmount, price: newPrice };
        //         }
        //         return item;
        //     });

        //     database().ref(`/${auth().currentUser.uid}/`).set({
        //        bag: updatedItems
        //     })

        //     return { ...state, bag: updatedItems };
        case "UPDATE_AMOUNT":
            const { id, newAmount, newPrice } = action.payload;
            if (newAmount === 0) {
                const updatedItems = state.bag.filter((item) => item.id !== id);

                database().ref(`/${auth().currentUser.uid}/bag`).set(
                    updatedItems
                );

                return { ...state, bag: updatedItems };
            }

            const updatedItems = state.bag.map((item) => {
                if (item.id === id) {
                    // Değiştirmek istediğiniz key'i güncelle
                    return { ...item, amount: newAmount, price: newPrice };
                }
                return item;
            });

            database().ref(`/${auth().currentUser.uid}/bag`).set(
                 updatedItems
            );

            return { ...state, bag: updatedItems };

        case "CLEAN_BAG":
            database().ref(`/${auth().currentUser.uid}/bag`).set(
                []
            )
            return { ...state, bag: [], ProductsInBagIds: [] }
        default:
            return state;
    }
};
