import React, {Component} from 'react';

import MovieCard from '../Components/MovieCard'


const API_KEY = process.env.REACT_APP_OMDB_API_KEY

export default class MovieDisplay extends Component {

    state = {
        nominated: [],
        results: []
    }


    componentDidMount() {
        this.fetchMovies()
    }

    fetchMovies = () => {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=' + API_KEY + '&s=ram', {
            method: 'GET'}).then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    results: data
                })
            })
    }



    render() {
        console.log(this.state.results)
        return(
            <div>
                <p>hi from movie display</p>
                <p>{this.props.query}</p>
                {/* {this.state.results.map((result, idx) => <MovieCard key={idx} movie={result} />)} */}
            </div>
        )
    }
}