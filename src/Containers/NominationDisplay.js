import React, {Component} from 'react';
import NominationCard from '../Components/NominationCard'

export default class NominationDisplay extends Component {

    shouldComponentUpdate(nextProps) {
        return this.props !== nextProps
     }

    render() {
        console.log('display props: ',this.props.nominated)
        // let {Title, Year} = this.props.result
        return(
            <div>
                {this.props.nominated.length !== 0 ? <h3>Nominated:</h3>:null}
                {this.props.nominated.map((movie, idx) => {
                return <NominationCard key={idx + 'n'} movie={movie} removeNominate={this.props.removeNominate}/>})}

            </div>
        )
    }
}