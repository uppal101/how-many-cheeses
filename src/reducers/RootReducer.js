// import React, {Component} from "react"
import {combineReducers} from 'redux'
import query from './ReducerNavSearchQuery'
import CheeseReducer from './CheeseReducer'
import FirmnessReducer from './FirmnessReducer'

const rootReducer= combineReducers({
 query,
 cheese: CheeseReducer,
 firmness: FirmnessReducer
})

export default rootReducer;
