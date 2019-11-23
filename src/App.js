import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkActionCreator } from "./store/actions/fetchAction";
import Quote from "./components/Quote";
import "./App.css";
import { RingLoader } from "react-spinners";

function App() {
  const data = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button
        className="App-button"
        onClick={() => dispatch(thunkActionCreator())}
      >
        Generate an SMARTASS programming quote
      </button>
      {data.isFetching && (
        <div className="App-loading"><RingLoader color={"aliceblue"} /></div>
      )}
      {data.isError && data.quote && (
        <h3 className="App-error">{data.quote}</h3>
      )}
      {data.quote.length > 0 && !data.isError && <Quote quote={data.quote} />}
    </div>
  );
}

export default App;
