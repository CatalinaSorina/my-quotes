import store from "../store";
import * as actionTypes from "./actionTypes";

export const fetchQuote = () => {
    return {
        type: actionTypes.FETCH_QUOTE
    };
};

export const receiveQuote = quote => {
    return {
        type: actionTypes.FETCHED_QUOTE,
        data: quote
    };
};

export const errorMessage = () => {
    return {
        type: actionTypes.ERROR_MESSAGE
    };
};

export const thunkActionCreator = () => {
    store.dispatch(fetchQuote());
    return function(dispatch){
        return fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
            .then(data => data.json())
            .then(data => {
                if(!data.en) {
                    throw new Error("No quote now. Try again.")
                }else{
                    dispatch(receiveQuote(data.en));
                }
            })
            .catch(error=>dispatch(errorMessage()));
    }
}