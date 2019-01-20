import React, { Component } from 'react';
import axios from 'axios';
import './NavBar.css'

export default function News(props) {

    return (
        <nav className="navbar">
        <ul>
        <li><a class="active" href=""><img className="homeIcon"src={"https://img.icons8.com/color/1600/barcelona-fc.png"}/></a></li>
        
        </ul>
        </nav>

        )
}

