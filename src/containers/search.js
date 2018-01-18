import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// connect to redux
import { connect } from 'react-redux';

// import action creator
import { getCars } from '../actions';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    searchCars = (event) => {
        event.preventDefault();
        //console.log(this.state); log what is input

        /*
            Function is available in props because of
            mapDispatchToProps.
        */
        this.props.getCars(this.state.keyword);
    }

    handleChange = (event) => {
        this.setState({
            keyword: event.target.value
        });
    }

    componentDidMount() {
        console.log(this.state);
    }


    render() {
        return (
            <div className="main_search">
                <form onSubmit={this.searchCars}>
                    <input 
                    type="text" 
                    placeholder="Search..." 
                    onChange={this.handleChange}
                    value={this.state.keyword} />
                </form>
            </div>
        );
    }
}

/**
 * Dispatch an action, peform
 * a defined action. In this case
 * use the getCars from actions/index
 */
function mapDispatchToProps(dispatch){
    return bindActionCreators({getCars}, dispatch)
}

export default connect(null, mapDispatchToProps)(Search);