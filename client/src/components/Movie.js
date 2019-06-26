import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieClicked: false
    }
    this.onMovieClicked = this.onMovieClicked.bind(this);
  }

  onMovieClicked() {
    console.log('clicked')
    this.setState({
      movieClicked: !this.state.movieClicked
    })
  }

  render() {
    let movieInfo = <div></div>
    if(this.state.movieClicked) {
      movieInfo =
      <div className="MovieInfo">
        <img src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`}></img>
        <div className="MovieDetails">
          <li>Year: {this.props.movie.release_date.slice(0,4)}</li>
          <li>Popularity: {this.props.movie.popularity}</li>
          <li>Vote Average: {this.props.movie.vote_average}</li>
          <li>Vote Count: {this.props.movie.vote_count}</li>
          <li>Description: {this.props.movie.overview}</li>
          <label>Watched: </label>
          <input type="radio" 
            checked={this.props.movie.watched ? true : false}
            onChange={() => this.props.onToggleWatched(this.props.movie)} />
          {/* <input type="button" value={this.props.movie.watched ? 'watched' : 'not watched'} 
            onClick={() => this.props.onToggleWatched(this.props.movie)} /> */}
        </div>
      </div>
    }
    return (
      <div className="Movie">
        <li className="MovieTitle" onClick={this.onMovieClicked}>{this.props.movie.title}</li>
        {movieInfo}
        
      </div>
    );
  }
}

export default Movie;