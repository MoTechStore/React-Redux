import React from 'react'
import {useSelector} from 'react-redux';


function Register() {
    const counter = useSelector(state =>state.counter)

    return (
        <div>
            <h1>The value of counter is {counter}</h1>
            
        </div>
    )
}

export default Register
