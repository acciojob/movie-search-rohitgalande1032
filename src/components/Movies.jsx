import React from 'react'
import { useContext } from 'react'
import { MovieContext } from './App'
import Movie from './Movie'

const Movies = () => {
    const {movies} = useContext(MovieContext);
    console.log(movies)
  return (
    <div>
        {movies.Search ? movies.Search.map((movie, index) => (
            <Movie movie={movie}/>
        )) : <p>Invalid movie name. Please try again.</p>}
    </div>
  )
}

export default Movies