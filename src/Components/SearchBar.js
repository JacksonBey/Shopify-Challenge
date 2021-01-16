import React, {Component} from 'react';

export default class SearchBar extends Component {


    state = {
        query: ''
    }

    handleChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.query)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search:
                        <input type="text" value={this.state.query} name="query" onChange={(e) => this.handleChange(e)}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}