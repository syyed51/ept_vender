import React, { Component } from 'react';

class App extends Component {

  componentDidMount(){
    // throw new Error("Catch me, if you can !");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button >Create transaction</button>
      </div>
    );
  }
}

export default App;