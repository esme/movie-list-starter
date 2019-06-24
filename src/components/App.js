import React from 'react';
import Search from './Search';
import Add from './Add';
import MovieList from './MovieList';

var movies = [
  {title: 'Mean Girls', watched: false},
  {title: 'Hackers', watched: false},
  {title: 'The Grey', watched: false},
  {title: 'Sunshine', watched: false},
  {title: 'Ex Machina', watched: false},
];

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput: '',
      movies: movies,
      filteredMovies: null,
      addInput: '',
      watched: false
    }

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onAddChange = this.onAddChange.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);
    this.onToggleWatched = this.onToggleWatched.bind(this);
    this.onFilterWatched = this.onFilterWatched.bind(this);
    this.onFilterUnwatched = this.onFilterUnwatched.bind(this);
  }

  onSearchChange(e) {
    // console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSearchSubmit(e) {
    e.preventDefault();
    let movies = [...this.state.movies];
    let filteredMovies = movies.filter(el => el.title.toLowerCase().includes(this.state.searchInput));
    this.setState({
      filteredMovies: filteredMovies,
      searchInput: ''
    })
  }

  onAddChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onAddSubmit(e) {
    e.preventDefault();
    let newMovies = [...this.state.movies, {
      title: this.state.addInput,
      watched: false
    }];
    let newFilteredMovies = this.state.movies || this.state.filteredMovies;
    newFilteredMovies = [...newFilteredMovies , {
      title: this.state.addInput,
      watched: false
    }];
    this.setState({
      movies: newMovies,
      filteredMovies: newFilteredMovies,
      addInput: ''
    })
  }

  onToggleWatched(movie) {
    let movies = [...this.state.movies]
    let newFilteredMovies = [];
    let newMovies = movies.map(el => {
      if(el.title === movie.title) {
        el.watched = !movie.watched
      }
      
      if (!el.watched) {
        newFilteredMovies.push(el)
      }

      return el;
    })
    this.setState({
      movies: newMovies,
      filteredMovies: newFilteredMovies
    })
  }

  onFilterWatched(e) {
    let movies = this.state.movies
    movies = [...movies];
    let newMovies = movies.filter(el => el.watched === true)
    console.log(newMovies);
    this.setState({
      filteredMovies: newMovies
    })
  }

  onFilterUnwatched(e) {
    let movies = [...this.state.movies]
    let newMovies = movies.filter(el => el.watched === false)
    console.log(newMovies)
    this.setState({
      filteredMovies: newMovies
    })
  }

  render() {
    const {filteredMovies, movies} = this.state;
    return (
      <div>
        <h1>Movie List</h1>
        <Add 
          onAddChange={this.onAddChange}
          onAddSubmit={this.onAddSubmit}
          addInput={this.state.addInput} />
        <Search 
          onSearchChange={this.onSearchChange} 
          onSearchSubmit={this.onSearchSubmit} 
          searchInput={this.state.searchInput} />
        <br />
        <input type="button" value="watched" onClick={this.onFilterWatched} />
        <input type="button" value="not watched" onClick={this.onFilterUnwatched} />
        {filteredMovies && filteredMovies.length === 0 && <span>Movie does not exist</span>}
        <MovieList 
          movies={filteredMovies || movies}
          onToggleWatched={this.onToggleWatched} 
          // watched={this.state.watched} 
          />
      </div>
    );
  }
}

export default App;