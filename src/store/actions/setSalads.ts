
import {SetSaladsType} from "./types/types";
import {SaladsType} from "../reducers/salads";


export const setSaladsAC = (payload: { success: boolean, result: SaladsType[] }):SetSaladsType => ({type:"APP/SET_SALADS", payload})
