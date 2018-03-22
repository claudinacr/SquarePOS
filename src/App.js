import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Containerproducts from './Components/Products/Containerproducts';
import Main from "./Components/Main";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Main></Main>
      </div>
    );
  }
}

export default App;
