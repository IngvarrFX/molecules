import {MoleculesListType} from "../../reducers/molecules";
import {SaladsType} from "../../reducers/salads";



export type SetMoluculesType = {
    type: "APP/SET_MOLECULES",
    payload: {
        success: boolean
        result: MoleculesListType[]
    }
}

export type SetSaladsType = {
    type: "APP/SET_SALADS",
    payload: {
        success: boolean
        result: SaladsType[]
    }
}
