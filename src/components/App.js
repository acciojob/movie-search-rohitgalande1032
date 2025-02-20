
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import 'regenerator-runtime/runtime';
import { createContext } from "react";
import Movies from "./Movies";

export const MovieContext = createContext()

const App = () => {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);

 const fetchMovies = async () => {
  try {
    const response = await fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=${"99eb9fd1"}`);
    const data = await response.json();
    setMovies(data);
    console.log(data)
  } catch (error) {
    console.log("Error", error)
  }
 }

 useEffect(()=> {
  fetchMovies();
 }, [movieName])

  const handleMovieChange = (event) => {
    setMovieName(event.target.value);
  }
  
  const handleClick = () => {
    console.log(movies)
    setMovies(movies)
  }

  return (
    <MovieContext.Provider value={{movies}}>
    <div>
      <form onSubmit={handleClick}>
      <div>
        <label htmlFor="movie-search">Search movie</label><br />
        <input value={movieName} onChange={handleMovieChange} type="text" id="movie-search" />
        <button onClick={handleClick}>Search</button>
      </div>
      </form>

      
      <Movies />
      
    </div>
    </MovieContext.Provider>
  )
}

export default App
