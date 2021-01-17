import './App.css';
import MovieDisplay from './Containers/MovieDisplay'
import SearchBar from './Components/SearchBar'
import React, {Component} from 'react';
import NominationDisplay from './Containers/NominationDisplay'

const API_KEY = process.env.REACT_APP_OMDB_API_KEY

export default class App extends Component {

  // results is the raw data from a query
  // query is either blank or the state of SearchBar upon a search
  // nominated is an array of movie objects. movie selection comes from 
  state = {
    results: [],
    query: '',
    nominated: []
  }


onSearch = (query) => {
  this.setState({
    query
  })
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

handleNominate = (movie) => {
  if (this.state.nominated.length < 5){
    this.setState({
      nominated: [...nominated, movie]
    })
  } else {
    this.setBanner()
  }
}

render(){
  return (
    <div>
      <SearchBar onSearch={this.onSearch}/>
      <MovieDisplay movies={this.state.results} query={this.state.query} handleNominate={this.handleNominate}/>
      <NominationDisplay />
    </div>
  );
}
}