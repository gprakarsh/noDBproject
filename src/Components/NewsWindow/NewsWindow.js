import React, { Component } from 'react';
import './NewsWindow.css';
import axios from 'axios';
import News from './News/News'
import './NewsWindow.css'

export default class NewsWindow extends Component {
    constructor() {
        super();
        this.state = {
            news: [],
            text: '',
            person: ''
        };
        this.handleChange = this.handleChange.bind( this );
        this.createNews = this.createNews.bind( this );
        this.editNews = this.editNews.bind( this );
        this.removeNews = this.removeNews.bind( this );    
    }

    componentDidMount(){
        axios.get(`/api/news`).then(res=>{
            this.setState({
                news:res.data
            });
        });        
    }

    handleChange(event){
        this.setState({text:event.target.value});
    }
    handleNameChange(val){
        this.setState({person:val});
    }
    createNews(event){
        const {text} = this.state;
        if(event.key === "Enter" && text.length !== 0){
            axios.post(`/api/news`,{text,person:this.state.person})
            .then(res=>{
                this.setState({news:res.data});
            });
            this.setState({text:"",person:""});
        }
    }

    editNews(id,text){
        axios.put(`/api/news/${id}`,{text})
        .then(res=>{
            this.setState({news:res.data});
        });
    }

    removeNews(id){
        axios.delete(`/api/news/${id}`)
        .then(res=>{
            this.setState({news:res.data});
        });
    }

    render() {
        return (
            <div id='NewsWindow_Container'>
                <div id='NewsWindow_diplay'>
                    {
                        this.state.news.map((news1) => (
                            <p><span><News id={news1.id} key={news1.id} text={news1.text} edit={this.editNews} remove={this.removeNews} person={news1.person} /></span></p>
                        ))
                    }
                </div>
                <div id="NewsWindow_newNews">
                    <textarea id="name" maxLength="25" placeholder="Enter Name" onChange={(e) => this.handleNameChange(e.target.value)} value={this.state.person} />
                    <textarea id="news" placeholder="Enter News" maxLength="100"
                    onKeyPress={this.createNews}
                    onChange={this.handleChange}
                    value={this.state.text}/>
                </div>
            </div>
        )
    }












}