import { Action } from "../actions/bankActions";
import { ActionTypes } from "../actionTypes/actionTypes";

const initialState = 0;


const reducer = (state: number = initialState, action: Action ) => {
    switch(action.type) {
        case ActionTypes.DEPOSIT:
            return state + action.payload;
        case ActionTypes.WITHDRAW:
            return state === 0 ? 0 : state - action.payload;
        case ActionTypes.BANKRUPT:
            return state = 0
        default :
            return state
    }
}

export default reducer;