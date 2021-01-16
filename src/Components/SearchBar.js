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

    render() {
        return(
            <div>
                <form>
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