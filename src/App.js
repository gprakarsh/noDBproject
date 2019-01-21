import React, { Component } from 'react';
import NewsWindow from './Components/NewsWindow/NewsWindow'
import Header from './Components/Header/Header'
import './App.css'
class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <NewsWindow/>            
      </div>
    )
  }
}
 export default App;