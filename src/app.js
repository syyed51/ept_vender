import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBook } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.counter = 1;
  }
  componentDidMount() {
    // try {
    // throw new Error("Catch me, if you can !");
    // } catch (err) {
    //   console.log(err);
    //   throw err;

    // }
  }

  addNewBook = (evt) => {
    var book = { id: this.counter++, title: "Old man and C", author: "Ernest Hamingway" }
    this.props.addBook(book)
  }
  render() {
    console.log("App State:", this.props.appState);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Oxford library</h1>
        </header>
        <p className="">
          Here is my catalogue of book:
        </p>
        <ul>
          <Rack list={this.props.appState} />
        </ul>
        <button type="button" onClick={this.addNewBook}>Add new book</button>
      </div>
    );
  }
}
let Rack = ({ list }) => {
  return (
    list.map(item => <Book book={item} key={item.id} />)
  );
}

let Book = ({ book }) => {
  console.log({ book });
  return (
    <li>
      {book.title + ' by ' + book.author}
      <button type="button"> *</button>
    </li>
  );
}
let mapState = state => ({
  appState: state
});

let mapDispatch = dispatch => bindActionCreators({
  addBook: addBook
}, dispatch);
export default connect(mapState, mapDispatch)(App);
