import React, {Component} from 'react';

export default class MovieCard extends Component {


    render() {
        return(
            <div>
                <p>{this.props.idx} {this.props.result.Title}</p>
            </div>
        )
    }
}