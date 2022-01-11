import React from "react";
import {Nulleble} from "../../types/types";
import {SaladsType} from "../../store/reducers/salads";


type SaladsPropsType = {
    salads: Nulleble<SaladsType[]>
}


export const Salads: React.FC<SaladsPropsType> = React.memo(({salads}) => {
    return (
        <div>
            {salads?.map(salad => {
                return (
                    <div>
                        {salad.title}
                        <button>add</button>
                    </div>
                )
            })}
        </div>
    );
})

