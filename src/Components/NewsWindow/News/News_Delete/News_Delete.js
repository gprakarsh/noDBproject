import React from 'react';
import './News_Delete.css'


export default function News_Delete(props){
    return(
        <span className="News_delete" onClick={() => props.remove(props.id)}>Delete</span>
    )
}