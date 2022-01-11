import {axiosInstance} from "./config/apiConfig";
import {MoleculesListType} from "../store/reducers/molecules";
import {SaladsType} from "../store/reducers/salads";


export const moleculesApi = {
    getMoleculesList: () => {
        return axiosInstance.get<ResponseMoleculesType>("/molecules")
    },
}

export const saladsApi = {
    getSalads: () => {
        return axiosInstance.get<ResponseSaladsType>("/salads")
    },
}


type ResponseMoleculesType = {
    success: boolean
    result: MoleculesListType[]
}

export type ResponseSaladsType = {
    success: boolean
    result: SaladsType[]
}


