import React from 'react'

function Welcome(props) {

    // console.log(props)

    function removeName() {
        // console.log(props.names)
        const updatedNames = props.names.filter(name => name !== props.name);

        // console.log(updatedNames)
        props.setNames(updatedNames)
    }

    return (
        <div onClick={removeName} className='welcome'>Welcome, {props.name} {props.count}</div>
    )
}

export default Welcome