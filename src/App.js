import './App.css';
import MovieDisplay from './Containers/MovieDisplay'
import SearchBar from './Components/SearchBar'
import React, {Component} from 'react';

export default class App extends Component {

  state = {
    query: ''
  }

  onSearch = (query) => {
    this.setState({
      query
    })
  }

render(){
  return (
    <div>
      <SearchBar onSearch={this.onSearch}/>
      <MovieDisplay query={this.state.query}/>
    </div>
  );
}
}