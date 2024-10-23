import { useState } from "react";
import movies from "../data/movies.json"

//console.log(movies.length)

function MovieList() {

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    const deleteMovie = (movieId) => {

        const newArr = moviesToDisplay.filter((movieObj) => {
            return movieObj.id !== movieId
        })
    
        //moviesToDisplay = newArr; // nop ! do not modify the list like that

        setMoviesToDisplay(newArr);

    }
    

     

    return (
        <section className="MovieList">
        <h1>List of movies : </h1>
        <h2>We currently have {moviesToDisplay.length} movies </h2>

        {moviesToDisplay.map((movieObj)=>{ 
            return (
                <div key = {movieObj.id} className="card">
                    <img src={movieObj.imgURL}/>
                    <h3>{movieObj.title}</h3>
                    <p>year : {movieObj.rating}</p>
                    <p>rating : {movieObj.rating}</p>
                    <button onClick={() => {deleteMovie(movieObj.id)}}>Delete this movie</button>
                </div>
            )
            
        })}
        
        </section>
        
    )
}

export default MovieList;