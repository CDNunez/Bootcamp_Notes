import React from 'react'

function AboutMe() {

    const city = "Indianapolis";
    const state = "Indiana";

    let styles = {
        ul: {
            textAlign: 'left',
            color: 'red',
        },
        p: {
            fontSize: '20pt'
        }
    } 

    return (
        <div>
            <p style={styles.p}>{city}, {state}</p>
            <ul style={styles.ul}>
                <li>Grocery Store</li>
                <li>Gas Station</li>
                <li>Diner</li>
            </ul>
        </div>
    )
}

export default AboutMe

/* 
    - Create an unordered list with the last 3 places you have visited. (Target, Alaska, the Kitchen, etc.)
*/