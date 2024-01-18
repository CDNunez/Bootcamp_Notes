import React from 'react'
import DisplayTotals from './DisplayTotals'

function PresidentVoting() {

    const votes = [
        { name: "Abe Lincoln", count: 139033 },
        { name: "Stephen Douglas", count: 115509 },
    ]

    return (
        <>
            <h1>Presidents</h1>
            {votes.map((records, index) => {
                return(
                    <DisplayTotals 
                        key= {index}
                        name = {records.name}
                        count = {records.count}
                    />
                )
            })

            }
        </>
    )
}

export default PresidentVoting