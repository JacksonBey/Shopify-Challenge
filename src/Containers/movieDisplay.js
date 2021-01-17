import React, {Component} from 'react';

import MovieCard from '../Components/MovieCard'




export default class MovieDisplay extends Component {

    state = {
        nominated: (this.props.nominated ? this.props.nominated : []),
        results: []
    }


    shouldComponentUpdate(nextProps) {
       return this.props !== nextProps
    }



    // produceCards = (results) => {
    //     results.map(result => console.log(result))
    // }



    render() {
        // console.log(this.state)
        // console.log(this.state.results.Search)
        console.log(this.props.movies)

        return(
            <div style={{display: 'inline-block'}}>
                
            <div style={{display: 'inline-block'}}>
                {/* <p>{this.props.query}</p> */}
                {this.props.query !== '' ? <h3>Results for "{this.props.query}"</h3>: null}
                {this.props.movies !== undefined ?  this.props.movies.map((result, idx) => {
                return <MovieCard key={idx} result={result}  nominated={this.props.nominated} handleNominate={this.props.handleNominate}/>}) : null}
               {/* <MovieCard /> */}
            </div>
                
            </div>
        )
    }
}