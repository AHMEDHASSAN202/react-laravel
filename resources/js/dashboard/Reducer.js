import { ALL_CHECKED } from "./actions";

export const Reducer = (state, action) => {
    switch (action.TYPE) {
        case ALL_CHECKED:
            return {...state, all_checked: action.payload} 
        default:
            return state;
    }
}