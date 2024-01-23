import React from 'react'
import PresidentTable from './PresidentTable'
import { presidentsArray } from './presidents.constant'

function Presidents() {

    const livingPresidents = presidentsArray.filter(president => {
        return president.passed === undefined;
    })

    const deceasedPresidents = presidentsArray.filter(president => {
        return president.passed !== undefined;
    })

    // console.log(livingPresidents)

    return (
        <>
            <h2>Hello from Presidents</h2>
            <PresidentTable title={"Living Presidents"} presidents={livingPresidents} />
            <PresidentTable title={"Dead Presidents"} presidents={deceasedPresidents} />
        </>
    )
}

export default Presidents