import React, { Component } from 'react';
import NewsWindow from './Components/NewsWindow/NewsWindow'
import Header from './Components/Header/Header'
import './App.css'
import Table from './Components/Table/Table';

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <NewsWindow/>
      {/* <Table/>                   */}
      </div>
    )
  }
}
 export default App;