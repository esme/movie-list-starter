import React from 'react';

const Movie = (props) => (
  <div>
    <p>{props.movie.title}</p>
    <input type="button" value={props.movie.watched ? 'watched' : 'not watched'} 
      onClick={() => props.onToggleWatched(props.movie)} />
  </div>
);

export default Movie;