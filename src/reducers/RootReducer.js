// import React, {Component} from "react"
import { combineReducers } from "redux";

import query from "./ReducerNavSearchQuery";
import CheeseReducer from "./CheeseReducer";
import FirmnessReducer from "./FirmnessReducer";
import AnimalReducer from "./AnimalReducer";
import SubstituteReducer from "./SubstituteReducer";
import AllCheesesReducer from "./AllCheeseReducer";
import mapQuery from "./MapReducer";

const rootReducer = combineReducers({
  query,
  mapQuery,
  cheese: CheeseReducer,
  firmness: FirmnessReducer,
  animal: AnimalReducer,
  substitute: SubstituteReducer,
  cheeses: AllCheesesReducer
});

export default rootReducer;
