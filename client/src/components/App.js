import React from 'react';
import Search from './Search';
import Add from './Add';
import MovieList from './MovieList';
import axios from 'axios';
import {API_KEY} from '../data/config';

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
      watchedList: false
    }

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onAddChange = this.onAddChange.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);
    this.onToggleWatched = this.onToggleWatched.bind(this);
    this.onFilterWatched = this.onFilterWatched.bind(this);
    this.onFilterUnwatched = this.onFilterUnwatched.bind(this);
  }

  componentDidMount() {
    console.log('mounted!')
    // this.props.getAllMovieData()
    this.getAllMovieData()
    // .then(({results}) => {
    //   this.setState({
    //     movies: results
    //   })
    // })
  }

  getAllMovieData() {
    axios.get('/api/movie')
      .then(({data}) => {
        const newData = data.map(el => {
          return {...el, watched : false}
        })
        this.setState({
          movies: newData
        })        
      })
      .catch(err => console.log(err))
    // axios.get(`https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=${API_KEY}`)
    //   .then(({data}) => {
    //     // console.log(data.results)
    //     const newData = data.results.map(el => {
    //       return {...el, watched : false}
    //     })
    //     console.log(newData)
    //     this.setState({
      //       movies: newData
      //     })
    //   })
  }

  getOneMovieData() {
    axios.get(`https://api.themoviedb.org/3/search/keyword?api_key=${api_key}&query=${query}&page=1`)
      .then((data) => {
        console.log(data)
      })
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
    console.log(e.target[0].value)
    e.preventDefault();
    if(e.target[0].value) {
      axios.post('/api/movie', {
        title: e.target[0].value
      })
      .then(res => console.log(res))
      .catch(err => console.log('add submit', err))
    }
    // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=asdsad&page=1
    // let newMovies = [...this.state.movies, {
    //   title: this.state.addInput,
    //   watched: false
    // }];
    // let newFilteredMovies = this.state.movies || this.state.filteredMovies;
    // newFilteredMovies = [...newFilteredMovies , {
    //   title: this.state.addInput,
    //   watched: false
    // }];
    // this.setState({
    //   movies: newMovies,
    //   filteredMovies: newFilteredMovies,
    //   addInput: ''
    // })
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
      filteredMovies: newMovies,
      watchedList: true
    })
  }

  onFilterUnwatched(e) {
    let movies = [...this.state.movies]
    let newMovies = movies.filter(el => el.watched === false)
    console.log(newMovies)
    this.setState({
      filteredMovies: newMovies,
      watchedList: false
    })
  }

  render() {
    const {filteredMovies, movies} = this.state;
    return (
      <div className="Movies">
        <p className="Title">Movie List</p>
        <div>
          <Add 
            onAddChange={this.onAddChange}
            onAddSubmit={this.onAddSubmit}
            addInput={this.state.addInput} />
          <Search 
            onSearchChange={this.onSearchChange} 
            onSearchSubmit={this.onSearchSubmit} 
            searchInput={this.state.searchInput} />
        </div>
        <div className="Header">
          <input type="button" value="watched" 
            className={this.state.watchedList ? "btn-active" : "btn-inactive"}
            onClick={this.onFilterWatched} />
          <input type="button" value="not watched" 
            className={this.state.watchedList ? "btn-inactive" : "btn-active"}
            onClick={this.onFilterUnwatched} />
        </div>
          {filteredMovies && filteredMovies.length === 0 && <span>Movie does not exist</span>}
          <MovieList 
            movies={filteredMovies || movies}
            onToggleWatched={this.onToggleWatched} 
            />
      </div>
    );
  }
}

export default App;