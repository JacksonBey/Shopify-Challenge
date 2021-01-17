import React, {Component} from 'react';

export default class NominationCard extends Component {

    // handleNominate = (movie) => {

    // }


    render() {
        console.log(this.props)
        console.log('hi')
        let {Title, Year} = this.props.movie
        return(
            <div>
                <p>{Title} ({Year})</p> <button onClick={() => this.props.removeNominate(this.props.movie)}>Unnominate</button>
            </div>
        )
    }
}