import {Nulleble} from "../../types/types";
import {SetMoluculesType, SetSaladsType} from "../actions/types/types";

const initialState: InitialStateType = {
    success: true,
    result: [{
        "_id": "61a49832cd52c5df4d36396c",
        "title": "Cadmium",
        "qty": 1,
        "price": 19,
        "discount_price": 19,
        "image": "/images/Cadmium.png",
        "__v": 0
    }]
}


export const moleculeReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "APP/SET_MOLECULES": {
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
    result: Nulleble<MoleculesListType[]>
}

type ActionType = SetMoluculesType | SetSaladsType


