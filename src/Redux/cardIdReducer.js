const INITIAL_STATE = {
   cardId : {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_ID":
            const cardInfo = action.payload
            
            return {
                ...state,
                cardId: cardInfo
            }; // Eğer action.payload zaten dizide varsa, state'i değiştirme
        
        default:
            return state;
    }
};
