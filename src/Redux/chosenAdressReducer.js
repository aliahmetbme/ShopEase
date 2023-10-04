const INITIAL_STATE = {
    adress : {}
 }
 
 export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
         case "SET_ADRESS":
             const adress = action.payload
             
             return {
                 ...state,
                 adress: adress
             }; // Eğer action.payload zaten dizide varsa, state'i değiştirme
         
         default:
             return state;
     }
 };
 