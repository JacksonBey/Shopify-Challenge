import './App.css';
import MovieDisplay from './Containers/MovieDisplay'
import SearchBar from './Components/SearchBar'
import React, {Component} from 'react';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY

export default class App extends Component {

  state = {
    results: []
  }

  onSearch = (query) => {
    // this.setState({
    //   query
    // })
    this.fetchMovies(query)
  }

  fetchMovies = (query) => {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=' + API_KEY + `&s=${query}`, {
        method: 'GET'}).then(res => res.json())
        .then(data => {
            this.setState({
                results: data.Search
            })
        })
}

render(){
  return (
    <div>
      <SearchBar onSearch={this.onSearch}/>
      <MovieDisplay movies={this.state.results}/>
    </div>
  );
}
}