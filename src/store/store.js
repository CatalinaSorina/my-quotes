import { createStore, applyMiddleware } from "redux";
import asyncReducer from "./reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools";

const store =createStore(asyncReducer,applyMiddleware(thunk),composeWithDevTools);

export default store;