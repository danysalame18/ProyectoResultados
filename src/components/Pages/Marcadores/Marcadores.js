import React from 'react'
import './Marcadores.css'



function Marcadores(props) {
    var vivo = props.videos
    return (
        <>
        <div className="card-body">
                <div className="card-title">
                   <h2> {props.title}</h2>
                   <br/>
                </div>
                <div className="card-text">
                <a href={props.url} target="blank">{props.competition}</a>
                <br />
                <div className="content" dangerouslySetInnerHTML={{__html: vivo}}></div>
                </div>
                </div>

      
        </>
    )
}

export default Marcadores
