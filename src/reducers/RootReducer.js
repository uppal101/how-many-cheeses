// import React, {Component} from "react"
import {combineReducers} from 'redux'
import query from './ReducerNavSearchQuery'
import mapQuery from './MapReducer'

const rootReducer= combineReducers({
 query,
 mapQuery
})



export default rootReducer;
