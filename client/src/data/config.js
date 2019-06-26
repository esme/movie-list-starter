const Promise = require('bluebird');
const API_KEY = '1d0c3418b4ee7f2ef5abd9e792e59eec';

const settings = {
  "async": true,
  "crossDomain": true,
  // "url": url,
  "method": "GET",
  "headers": {},
  "data": "{}"
}

const urlAll = `https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=${API_KEY}`;

const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=asdsad&page=1`

const getAllMovieData = function() {
  return $.ajax({...settings, url: urlAll})
  // .done(function (response) {
    // console.log(response.results);
    // callback(response.results)
  //   return response.results;
  // });
}

const getMovieData = function() {
  $.ajax({...settings, url}).done(function (response) {
    return response.results;
  });
}

export {getMovieData, getAllMovieData, API_KEY};