import React, { Component } from 'react';
import NewsWindow from './Components/NewsWindow/NewsWindow'
import Header from './Components/Header/Header'
import './App.css'
import Table from './Components/Table/Table';

class App extends Component {
  constructor(){
    super();
    this.state={
      displayTable:false
    }
  }
  render() {
    let {displayTable}= this.state;
    return (
      <div>
      {
      displayTable
      ?
      <div>
      <Header/>
      <Table/>
      </div>
      :<div>
        <Header/>
      <NewsWindow/>
      </div>
      }
      <span id="laLigaToggle"onClick={()=>this.setState({displayTable:!displayTable})}>La Liga Table</span>                 
      </div>
    )
  }
}
 export default App;