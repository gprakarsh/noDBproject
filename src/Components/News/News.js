import React, { Component } from 'react';
import axios from 'axios';
import './News.css'

export default function News(props){
    console.log(props)
    const displayNews = props.news.map((e,i)=>{
        return (
        <center>
        <p key={i}>{e.id} {e.text}</p>        
        {/* // <p key={i}>{JSON.stringify(e.)}</p> to be used later */}
        </center>
        )
    })
    return(
        <div>
        <div className="newsEnter">
        <input placeholder="Enter News" onChange={(e)=>props.handleUserInput(e.target.value)} value={props.userInput}/>
        {props.handleGettingNews()}
        <button onClick={()=>props.handleAddNews()}>+</button>
        </div>
        {displayNews}         
        </div>
     )
}