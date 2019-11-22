const initialState={
    quote:"",
    isFetching: false,
    isError: false
}

const asyncReducer = (state=initialState,action) => {
    switch(action.type){
        case "FETCH_QUOTE":
            return Object.assign({},state,{
                isFetching: true,
                quote:"",
                isError: false
            });
        case "FETCHED_QUOTE":
            return Object.assign({},state,{
                quote:action.data,
                isFetching: false,
                isError: false
            });
        case "ERROR_MESSAGE":
            return Object.assign({},state,{
                isError: true,
                isFetching: false
            });
        default:
            return state;
    }
}

export default asyncReducer;