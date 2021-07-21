
import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

const counter = (state=0, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return state + 1
        case types.DECREMENT:
            return state - 1
        case types.INCREMENT_SYNC:
            console.log("Sleeping 2 sec")
            sleep(2000)
            return state + 1
        default:
            return state;
    }
}   
export default combineReducers(counter);