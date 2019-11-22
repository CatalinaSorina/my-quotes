import React from 'react';
import { connect } from "react-redux";
import { thunkActionCreator } from "./store/actions/fetchAction";
import Quote from "./components/Quote";
import './App.css';

class App extends React.Component {
  getQuote = () => {
    this.props.dispatch(thunkActionCreator);
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.getQuote}>Generate an SMARTASS programming quote</button>
        {this.props.data.isFetching ? <h3>Loading...</h3> : null}
        {this.props.data.isError ? (
          <h3 className="error">No quote. Try again!</h3>
        ) : null}
        {this.props.data.quote.length > 0 ? (
          <Quote quote={this.props.data.quote} />
        ) : null}
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(App);
