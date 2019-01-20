import React, { Component } from 'react';
import axios from 'axios';
import News from './Components/News/News';
import './App.css'
import NavBar from './Components/NavBar/NavBar'

class App extends Component {
  // componentDidMount(){
  //     axios.get('/api/whatever')
  // }
  constructor() {
    super();
    this.state = {
      userInput: "",
      news: []
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddNews = this.handleAddNews.bind(this);
    this.handleDeleteNews = this.handleDeleteNews.bind(this);
    this.handleGettingNews = this.handleGettingNews.bind(this);
  }

  handleUserInput(val) {
    this.setState({ userInput: val })
  }

  handleSubmit() {
    let news = this.state.news.slice();
    console.log(news);
    let newId = news.length + 1;
    console.log(newId);
    let { userInput } = this.state;
    news.push({ id: newId, news: userInput });
    this.setState({ news: news, userInput: "" });
  }

  handleAddNews() {
    const newNews = {
      text: this.state.userInput
    }
    /* axios works just like postman but for JavaScript
    we invoke the post method and give it two arguments
    the first is the URL just like you use in postman
    and the second is the body object just like the JSON object
    that we build in postman
    */

    axios.post(`/api/news`, newNews)
      .then(res => {
        this.setState({
          news: res.data
        })

      })

    this.setState({
      userInput: ''
    })
  }

  // this method is invoked by the "Get Messages" button
  handleGettingNews() {
    axios.get(`/api/news`)
      .then(res => {
        // console.log('get response data', response);

        this.setState({
          news: res.data
        })
      }
      )
  }

  handleDeleteNews(id) {
    axios.delete(`/api/message/:id`)
      .then((res) => {
        this.setState({
          news: res.data
        })
      })
  }


  render() {
    console.log(`This is state news`, this.state.news)
    return (
      <div className="App">
        
        <header>
          <h1>Barcelona Blaugranes</h1>
          <h3>For Barcelona Fans</h3>
        </header>
        <NavBar />
        <News handleUserInput={this.handleUserInput} handleSubmit={this.handleSubmit} news={this.state.news} userInput={this.state.userInput}
          handleGettingNews={this.handleGettingNews} handleAddNews={this.handleAddNews}
          handleDeleteNews={this.handleDeleteNews} />
      </div>
    );
  }
}

export default App;
