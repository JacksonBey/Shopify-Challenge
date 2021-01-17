import React, {Component} from 'react';

export default class MovieCard extends Component {

    // handleNominate = (movie) => {

    // }


    render() {
        let {Title, Year} = this.props.result
        
        //check if title is in nominations prop. if so, set nominated to true so to disable the nominate button
        let nominated = false
        this.props.nominated.forEach(nomination =>nomination.Title === Title ? nominated = true : null)
        return(
            <div>
                <p>{Title} ({Year})</p> <button 
                disabled={nominated}
                onClick={() => this.props.handleNominate(this.props.result)}>Nominate</button>
            </div>
        )
    }
}