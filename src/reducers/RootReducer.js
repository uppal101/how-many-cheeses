// import React, {Component} from "react"
import {combineReducers} from 'redux'
import query from './ReducerNavSearchQuery'
import CheeseReducer from './CheeseReducer'
import FirmnessReducer from './FirmnessReducer'
import AnimalReducer from './AnimalReducer'
import mapQuery from './MapReducer'

const rootReducer= combineReducers({
 query,
 mapQuery,
 cheese: CheeseReducer,
 firmness: FirmnessReducer,
 animal: AnimalReducer

})

export default rootReducer;
