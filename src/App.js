import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './data';

class App extends Component {
  render() {
    const elem = Data.items.map((itemsss) =>{
      return(
        <div>
         <p>{itemsss.name}</p>
        </div>
      );
    })
    return (
      <div className="App">
       {elem}
      </div>
    );
  }
}

export default App;
