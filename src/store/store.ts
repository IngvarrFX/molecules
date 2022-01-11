import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {moleculeReducer} from "./reducers/molecules";
import {saladsReducer} from "./reducers/salads";

const rootReducer = combineReducers({
    molecules: moleculeReducer,
    salads: saladsReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionTypes<T extends { [key: string]: (...args: any) => any }> = ReturnType<PropertiesType<T>>
export type AppDispatch = typeof store.dispatch
const store = createStore(rootReducer, applyMiddleware(thunk));
export default // @ts-ignore
window.store = store;



