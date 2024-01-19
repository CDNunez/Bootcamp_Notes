import React from 'react'

function Counter({count, setCount}) {


    // console.log(count)
    function countDown() {
        setCount(count - 1)
    }

    function countUp() {
        // setCount(count + 1)
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
        console.log(count)
    }


    return (
        <div className="counter">
            <button onClick={countDown}>-</button>
            <span>{count}</span>
            <button onClick={countUp}>+</button>

        </div>
    )
}

export default Counter