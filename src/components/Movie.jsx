import React from "react";

function Movie (props){

    return (
    <div key = {props.movieDetails.id} className="card">
        <img src={props.movieDetails.imgURL}/>
        <h3>{props.movieDetails.title}</h3>
        <p>year : {props.movieDetails.rating}</p>
        <p>rating : {props.movieDetails.rating}</p>
        <button onClick={() => {props.myCBFunction(props.movieDetails.id)}}>Delete this movie</button>
    </div>

    )

}

export default Movie;