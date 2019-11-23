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

export const errorMessage = msg => {
  return {
    type: actionTypes.ERROR_MESSAGE,
    data: msg
  };
};

export const thunkActionCreator = () => dispatch => {
  dispatch(fetchQuote());
  fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
    .then(data => data.json())
    .then(data => {
      return !data.en
        ? dispatch(errorMessage("Wrong data !"))
        : dispatch(receiveQuote(data.en));
    })
    .catch(error => dispatch(errorMessage()));
};

// export const thunkActionCreator = () => async dispatch => {
//   dispatch(fetchQuote());
//   const res = await fetch(
//     "https://programming-quotes-api.herokuapp.com/quotes/random"
//   );
//   let data = await res.json();
//   if (!data.en) {
//     dispatch(errorMessage());
//   } else {
//     data.en
//       ? dispatch(receiveQuote(data.en))
//       : dispatch(receiveQuote("Wrong data !"));
//   }
// };
