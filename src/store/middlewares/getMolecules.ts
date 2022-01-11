import {moleculesApi} from "../../api/api";
import {AppDispatch} from "../store";
import {setMoleculesAC} from "../actions/setMolucules";


export const getMoleculesThunk = () => async (dispatch: AppDispatch) => {
    const res = await moleculesApi.getMoleculesList()
    try {
        dispatch(setMoleculesAC(res.data))
    } catch (err) {
        console.log(err)
    }

}
