import React, {Component} from 'react';

import MovieCard from '../Components/MovieCard'




export default class MovieDisplay extends Component {

    // state = {
    //     nominated: [],
    //     results: []
    // }


    shouldComponentUpdate(nextProps) {
       return this.props !== nextProps
    }



    produceCards = (results) => {
        results.map(result => console.log(result))
    }



    render() {
        // console.log(this.state)
        // console.log(this.state.results.Search)
        console.log(this.props.movies)
        return(
            <div>
                <p>hi from movie display</p>
                {/* <p>{this.props.query}</p> */}
                {this.props.movies.length !== 0 ?  this.props.movies.map((result, idx) => {
                return <MovieCard key={idx} result={result} />}) : null}
               {/* <MovieCard /> */}
            </div>
        )
    }
}