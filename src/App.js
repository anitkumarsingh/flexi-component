import React, { Component } from 'react';
import './App.css';
import Data from './data';
import Flexi  from './Flexi';

class App extends Component {
  constructor(){
    super();
    this.state = {
      datas: [
        {person_name:"Anit",state:"Karnataka"}
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
  let data = this.state.datas.map((d) => {
    return (
      <tr key={d.id}>
          <td>{d.person_name}</td>
          <td>{d.state}</td>
          <td>{JSON.stringify(this.state.datas)}</td>
      </tr>
    );
  });
    return (
      <div className="App">
       <Flexi onSubmit={(Data)=>this.onFlexiSubmit(Data)} title="Dynamic Form" config={Data}/>
       <table id="customers">
          <th>Person's Name</th>
          <th>Person's State</th>
          <th>JSON Format</th>
          
          <tbody>{data}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
