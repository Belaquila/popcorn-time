
import Movie from "./Movie";


function MovieList(props) {

  


    

     

    return (
        <section className="MovieList">
        <h1>List of movies : </h1>
        

        {props.moviesToDisplay.map((movieObj)=>{ 
            return (
                <Movie key={movieObj.id} movieDetails={movieObj} myCBFunction={props.callbackToDeleteMovie}/>
            )
            
        })}
        
        </section>
        
    )
}

export default MovieList;