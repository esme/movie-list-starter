import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {getMovieData, getAllMovieData} from './data/config.js';

ReactDOM.render(<App 
  getMovieData={getMovieData} 
  getAllMovieData={getAllMovieData} />, document.getElementById('app'));
