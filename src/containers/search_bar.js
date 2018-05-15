import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Search } from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState( { term: event.target.value} );
    }

    onFormSubmit(event){
        event.preventDefault();

        //call action
        this.props.Search(this.state.term);

        //clear search input
        this.setState( {term: '' } );
    }

    render() {
        
        return (
            <form 
                onSubmit={this.onFormSubmit}
                className="input-group">
                <input 
                    placeholder="Keywords such as name or event"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn" >
                    <button type="submit" className="btn btn-secondary">Search
                    </button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){

    return bindActionCreators( { Search }, dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);