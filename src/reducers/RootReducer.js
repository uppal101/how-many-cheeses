// import React, {Component} from "react"
import {combineReducers} from 'redux'
import query from './ReducerNavSearchQuery'
import CheeseReducer from './CheeseReducer'
import mapQuery from './MapReducer'

const rootReducer= combineReducers({
 query,
 mapQuery,
 CheeseReducer
})



export default rootReducer;
