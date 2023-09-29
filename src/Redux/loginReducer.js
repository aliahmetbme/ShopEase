import { Alert } from "react-native";

const INITIAL_STATE = {
    isIn: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOG_IN":
            return {...state , isIn: true}
        case "LOG_OUT":
            return {...state , isIn: false}
        default:
            return state;
    }
};
