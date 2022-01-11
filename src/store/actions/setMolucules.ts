import {MoleculesListType} from "../reducers/molecules";
import {SetMoluculesType} from "./types/types";

export const setMoleculesAC = (payload: { success: boolean, result: MoleculesListType[] }): SetMoluculesType => ({type: "APP/SET_MOLECULES",payload })
