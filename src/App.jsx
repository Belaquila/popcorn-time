import Header from "./components/Header"
import Footer from "./components/Footer"
import MovieList from "./components/MovieList"
import { useState } from "react";
import movies from "./data/movies.json"

function App() {
  // lift state up
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {

    const newArr = moviesToDisplay.filter((movieObj) => {
        return movieObj.id !== movieId
    })

    //moviesToDisplay = newArr; // nop ! do not modify the list like that

    setMoviesToDisplay(newArr);

}

  return (
    <>
   
      <Header moviesToDisplay = {moviesToDisplay}/>
      <MovieList moviesToDisplay = {moviesToDisplay} callbackToDeleteMovie = {deleteMovie}/>
      <Footer/>

    </>
  )
}

export default App
