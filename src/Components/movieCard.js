import React, {Component} from 'react';

export default class MovieCard extends Component {


    render() {
        let {Title, Year} = this.props.result
        return(
            <div>
                <p>{Title} ({Year})</p> <button>Nominate</button>
            </div>
        )
    }
}