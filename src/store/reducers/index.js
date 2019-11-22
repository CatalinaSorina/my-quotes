import * as actionTypes from "../actions/actionTypes";

const initialState={
    quote:"",
    isFetching: false,
    isError: false
}

const asyncReducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.FETCH_QUOTE:
            return Object.assign({},state,{
                isFetching: true,
                quote:"",
                isError: false
            });
        case actionTypes.FETCHED_QUOTE:
            return Object.assign({},state,{
                quote:action.data,
                isFetching: false,
                isError: false
            });
        case actionTypes.ERROR_MESSAGE:
            return Object.assign({},state,{
                isError: true,
                isFetching: false
            });
        default:
            return state;
    }
}

export default asyncReducer;