import React, {useEffect} from "react";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {getMoleculesThunk} from "./store/middlewares/getMolecules";
import {AppStateType} from "./store/store";
import {Nulleble} from "./types/types";
import {MoleculesListType} from "./store/reducers/molecules";
import {SaladsType} from "./store/reducers/salads";
import {Salads} from "./components/Salads/Salads";
import {getSaladsThunk} from "./store/middlewares/getSalads";
import {Molecules} from "./components/Molecules/Molecules";

function App() {
    const molecules = useSelector<AppStateType, Nulleble<MoleculesListType[]>>(state => state.molecules.result)
    const salads = useSelector<AppStateType, Nulleble<SaladsType[]>>(state => state.salads.result)
    const dispatch = useDispatch()
    const getMolecules = () => {
        dispatch(getMoleculesThunk())
    }
    useEffect(() => {
        dispatch(getMoleculesThunk())
        dispatch(getSaladsThunk())
    }, [])
    return (
        <div className="App">
            <Molecules molecules={molecules}/>
            <Salads salads={salads}/>
        </div>
    );
}

export default App;
