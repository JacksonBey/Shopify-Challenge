import React, {Component} from 'react';

export default class NominationCard extends Component {

    // handleNominate = (movie) => {

    // }


    render() {
        let {Title, Year} = this.props.movie
        return(
            <div>
                <p>{Title} ({Year})</p> <button onClick={() => this.props.removeNominate(this.props.movie)}>Nominate</button>
            </div>
        )
    }
}