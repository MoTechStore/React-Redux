import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import allActions from '../actions';
import allReducers from '../reducers';
import {increment, decrement} from '../actions/counter'

function Home() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>The value of counter is {counter}</h1>

            <button className="btn btn-primary" onClick={() =>dispatch(increment())}>Increment</button>
            <br/>
            <br/>
            <button className="btn btn-success" onClick={() =>dispatch(decrement())}>Decrement</button>


        </div>
    )
}

export default Home
