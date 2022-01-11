import {Nulleble} from "../../types/types";
import {SetMoluculesType, SetSaladsType} from "../actions/types/types";

const initialState: InitialStateType = {
    success: false,
    result: null
}


export const saladsReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "APP/SET_SALADS": {
            return {...action.payload}
        }
        default:
            return state
    }
};


//types
export type MoleculesListType = {
    _id: string
    title: string
    qty: number
    price: number
    discount_price: number
    image: string
    __v: number
}
type InitialStateType = {
    success: boolean,
    result: Nulleble<SaladsType[]>
}

export type SaladsType = {
    "_id": string
    "title": string
    "price": number
    "discount_price": number
    "composition": string[]
    "__v": number
}

type ActionType = SetMoluculesType | SetSaladsType
