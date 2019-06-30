const rp = require('request-promise');
const api_key = require('../config');

const findMovieID = function(q) {
  return rp(`https://api.themoviedb.org/3/search/keyword?api_key=${api_key}&query=${q}&page=1`)
}

const findMovie = function(q) {
  return rp(`https://api.themoviedb.org/3/movie/${q}?api_key=${api_key}&language=en-US`)
}

module.exports.findMovieID = findMovieID;
module.exports.findMovie = findMovie;
