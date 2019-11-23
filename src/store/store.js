import { createStore, applyMiddleware, compose } from "redux";
import asyncReducer from "./reducers";
import reduxThunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(reduxThunk));

const store = createStore(asyncReducer, enhancer);

export default store;