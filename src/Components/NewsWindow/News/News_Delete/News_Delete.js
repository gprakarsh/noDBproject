import React from 'react';
import './News_Delete.css'


export default function News_Delete(props){
    return(
        <span className="News_delete" onClick={() => props.remove(props.id)}><img src="https://image.flaticon.com/icons/svg/61/61391.svg"/></span>
    )
}