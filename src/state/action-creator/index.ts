import { Dispatch } from "react"
import { Action } from "../actions/bankActions"
import { ActionTypes } from "../actionTypes/actionTypes"

export const handleDeposit = (amount: number) => {
    return ((dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.DEPOSIT,
            payload: amount
        })
    })
}

export const handleWithDraw = (amount: number) => {
    return ((dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.WITHDRAW,
            payload: amount
        })
    })
}

export const handleBankrupt = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.BANKRUPT,
        })
    }
}