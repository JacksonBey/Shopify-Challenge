import React, {Component} from 'react';
const API_KEY = process.env.REACT_APP_OMDB_API_KEY

export default class MovieDisplay extends Component {

    state = {
        movieList: []
    }


    componentDidMount() {

    }

    fetchMovies = () => {
        fetch('http://localhost:3001/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }}).then(res => res.json())
            .then(data => {
                this.setState({
                    movieList: data
                })
            })
    }

    render() {
        return(
            <div>
                <p>hi from movie container</p>
            </div>
        )
    }
}