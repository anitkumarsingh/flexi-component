import React, { Component } from 'react';
import './App.css';
import Data from './data';
import Flexi  from './Flexi';

class App extends Component {
  constructor(){
    super();
    this.state = {
      datas: [
        {id: 1, Person_name:"Anit",state:"Karnataka"}
      ]
    }
  }
  onFlexiSubmit = (Data) =>{
    let id = +new Date();
    // console.log(this.state.datas);
    alert(JSON.stringify(Data));
     let datas2 = JSON.stringify(Data);
    this.setState({
      datas:[Data,...this.state.datas]
    })
  }
  render() {
  //  console.log(Data);
    return (
      <div className="App">
       <Flexi onSubmit={(Data)=>this.onFlexiSubmit(Data)} title="Dynamic Form" config={Data}/>
       {JSON.stringify(this.state.datas)}
      </div>
    );
  }
}

export default App;
