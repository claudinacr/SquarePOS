import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Containerproducts from './Components/Products/Containerproducts';
import Main from "./Components/Main";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Main></Main>
          <Containerproducts>
            
          </Containerproducts>
      </div>
    );
  }
}

export default App;
