import {AppDispatch} from "../store";
import {saladsApi} from "../../api/api";
import {setSaladsAC} from "../actions/setSalads";


export const getSaladsThunk = () => async (dispatch: AppDispatch) => {
    const res = await saladsApi.getSalads()
    try {
        dispatch(setSaladsAC(res.data))
    } catch (err) {
        console.log(err)
    }
}
