import React from 'react';
import { connect } from "react-redux";
import Quote from "./components/Quote";
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <button>Generate an SMARTASS programming quote</button>
        <Quote quote={this.props.quote} />
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
