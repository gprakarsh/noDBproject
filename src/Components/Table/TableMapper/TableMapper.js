import React from 'react';
import './CSSFiles/TableMapper.css';

export default function TableMapper(props) {
    
    const { standings } = props;
    let mapper = standings.map((standing,i)=>{
        console.log(standing.position)
        console.log(standing.team.crestUrl)
        return <tr key={i}><p>{standing.position}</p>{" "}<img src={standing.team.crestUrl}/></tr>
    })    

    return (
        <div>
         {mapper}       
        </div>
    )
}