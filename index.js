const axios = require('axios');

function create(apikey){
  const base = axios.create({
    baseURL: `http://www.omdbapi.com/?apikey=${apikey}&`
  })
  return base;
}

const omdb = create('key');

//Todo error handling
function async fetchApi(url) {
  const response = await omdb.get(url);
	return response;
}

module.exports = {
  //Get a movie by imdb id
  searchById: (id) => {
    url = `i=${id}`;
    fetchApi(url);
  },

  //Search for a movie by title, year is optional
  searchByTitle: (title, year) => {
    url = `t=${title}`;
    if(year){
      url += `&y=${year}`
    }
    fetchApi(url);
  },

  //Return all movies released that year
  moviesByYear: (year) => {
    url = `y=${year}`;
    fetchApi(url);
  }
  
}
