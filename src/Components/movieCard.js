import React, {Component} from 'react';

export default class MovieCard extends Component {

    // handleNominate = (movie) => {

    // }


    render() {
        let {Title, Year} = this.props.result
        return(
            <div>
                <p>{Title} ({Year})</p> <button onClick={() => this.props.handleNominate(this.props.result)}>Nominate</button>
            </div>
        )
    }
}