import React, {Component} from 'react';
const API_KEY = process.env.REACT_APP_OMDB_API_KEY

export default class MovieDisplay extends Component {

    state = {
        movieList: []
    }


    componentDidMount() {
        this.fetchMovies()
    }

    fetchMovies = () => {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=' + API_KEY + '&t=yo', {
            method: 'GET'}).then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    movieList: data
                })
            })
    }

    render() {
        return(
            <div>
                <p>hi from movie display</p>
            </div>
        )
    }
}