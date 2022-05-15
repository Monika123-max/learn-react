import countReducer from "./counter";

import { combineReducers } from "redux";

const rootReducer = combineReducers({ countReducer });

export default rootReducer;
