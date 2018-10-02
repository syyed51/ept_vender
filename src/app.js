import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    // try {
      // throw new Error("Catch me, if you can !");
    // } catch (err) {
    //   console.log(err);
    //   throw err;

    // }
  }

  classMethod = ()=> console.log("call method are working now");
  render() {


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="">
          This app should not have:
        </p>
        <ul>
          <li>Redux</li>
          <li>Rx</li>
          <li>Observables</li>
        </ul>
        <button>Create transaction</button>
      </div>
    );
  }
}

export default App;
