import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBook, toogleStatusAction } from './actions';
import Nav from './nav';

class App extends       Component {
  constructor(props) {
    super(props);
    this.counter = 0;
  }
  
  componentDidMount () {
    // try {
    // throw new Error("Catch me, if you can !");
    // } catch (err) { console.log(err)}
  }

  addNewBook = (evt) => {
    var book = { id: this.counter++, title: "Old man and C", author: "Ernest Hamingway", isFavourite: true }
    this.props.addBook(book)
  }
  render() {
    console.log("App State:", this.props);

    return (
      <div className="App">
      <Nav />
        <header className="App-header">
          <h1 className="App-title">Oxford library</h1>
        </header>
        <p className="">
          Here is my catalogue of book:
        </p>
        <ul>
          <Rack list={this.props.appState} toogleAction={this.props.toogle} />

        </ul>
        <button type="button" onClick={this.addNewBook}>Add new book</button>
      </div>
    );
  }
}
let Rack = ({ list = [], toogleAction }) => {
  return (
    list.map(item => <Book book={item} key={item.id} toogleAction={toogleAction} />)
    );
}

let Book = ({ book = {}, toogleAction }) => {
  return (
    <li style={book.isFavourite? {color:'red',height:50}:{color:'green',height:50}} 
    onClick={() => toogleAction(book.id)} >
      {book.title + ' by ' + book.author}
    </li>
  );
}
let mapState = state => ({
  appState: state
});

let mapDispatch = dispatch => bindActionCreators({
  addBook: addBook,
  toogle: toogleStatusAction
}, dispatch);
export default connect(mapState, mapDispatch)(App);