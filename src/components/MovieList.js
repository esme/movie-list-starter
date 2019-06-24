import React from 'react';
import Movie from './Movie';

const MovieList = (props) => (
  <div>
  {props.movies.map((el, i) =>
    <Movie 
      key={i}
      movie={el} 
      onToggleWatched={props.onToggleWatched}
      // watched={props.watched} 
      />
  )}
  </div>
);

export default MovieList;