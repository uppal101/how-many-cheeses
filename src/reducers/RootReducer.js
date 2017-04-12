// import React, {Component} from "react"
import {combineReducers} from 'redux'
import query from './ReducerNavSearchQuery'
import CheeseReducer from './CheeseReducer'

const rootReducer= combineReducers({
 query,
 cheese: CheeseReducer
})

export default rootReducer;
