import React, { Component } from 'react';
import axios from 'axios';
import './News.css'

export default function News(props){
    const displayNews = props.news.map((e,i)=>{
        return (
        <center>
        <p key={i}>{e.id} {e.news}</p>        
        {/* // <p key={i}>{JSON.stringify(e.)}</p> to be used later */}
        </center>
        )
    })
    return(
        <div>
        <input placeholder="Enter News" onChange={(e)=>props.handleUserInput(e.target.value)} value={props.userInput}/>
        <button onClick={()=>props.handleSubmit()}>Add</button> 
        {displayNews}
        </div>
     )
}