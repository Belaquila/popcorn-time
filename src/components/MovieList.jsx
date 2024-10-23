import movies from "../data/movies.json"

//console.log(movies.length)

function MovieList() {
    return (
        <section className="MovieList">
        <h1>List of movies : </h1>

        {movies.map((movieObj)=>{
            
            return (
                <div key = {movieObj.id} className="card">
                    <img src={movieObj.imgURL}/>
                    <h3>{movieObj.title}</h3>
                    <p>year : {movieObj.rating}</p>
                    <p>rating : {movieObj.rating}</p>

                </div>
            )
            
        })}
        
        </section>
        
    )
}

export default MovieList;