import React from 'react'

const Movie = ({movie}) => {
  return (
    <div>
        <ul>
            <li>
                <h1>{movie.Title}</h1>
                <img width={'200px'} height={'200px'} src={movie.Poster} />
            </li>
        </ul>
    </div>
  )
}

export default Movie