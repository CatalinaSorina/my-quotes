import React from 'react';
import './App.css';
import Quote from "./components/Quote";

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

export default App;
