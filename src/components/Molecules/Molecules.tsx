import React from "react";
import {MoleculesListType} from "../../store/reducers/molecules";
import {Nulleble} from "../../types/types";


type MoleculesPropsType = {
    molecules: Nulleble<MoleculesListType[]>
}
export const Molecules: React.FC<MoleculesPropsType> = React.memo(({molecules}) => {
    return (
        <div>
            {molecules?.map(molecule => {
                return (
                    <div>{molecule.title}
                        <button>add</button>
                    </div>
                )
            })}
        </div>
    );
})
