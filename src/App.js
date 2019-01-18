import React, { Component } from 'react';
import axios from 'axios';
import News from './Components/News/News';

class App extends Component {
  // componentDidMount(){
  //     axios.get('/api/whatever')
  // }
   constructor(){
     super();
     this.state={
       userInput:"",
       news:[
        {id:1,
         news:"This is a test",
         userName:""   //to be used later alligator      
        }        
      ]       
     }
     this.handleUserInput=this.handleUserInput.bind(this);
     this.handleSubmit=this.handleSubmit.bind(this);
   }

   handleUserInput(val){
     this.setState({userInput:val})
     console.log(this.state.userInput)
   }

   handleSubmit(){
     let news = this.state.news.slice();
     console.log(news);
     let newId = news.length+1;
     console.log(newId);
     let {userInput} = this.state;
     news.push({id:newId,news:userInput});
     this.setState({news:news,userInput:""});     
   }

  render() {
    return (
      <div className="App">
      <News handleUserInput={this.handleUserInput} handleSubmit={this.handleSubmit} news={this.state.news} userInput={this.state.userInput}/>  
      </div>
    );
  }
}

export default App;
