import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selecUser} from '../actions/index';
import {bindActionCreators} from 'redux';

class UserDetail extends Component{
    

    render(){
        console.log('entry detail:');
        if(!this.props.user){
            return <div id="context">please select user</div>;
        }
        console.log('detail:' + this.props.user['Scout-Full Name']);

        return (
            <div id="context">
                 <h3>User Details:</h3>
                 <h4><div>{this.props.user['Scout-Full Name']}</div></h4>
                 <hr />
                 <div>Name: {this.props.user['Scout-Full Name']}</div>
                 <div>Roster ID: {this.props.user['Scout-Roster ID']}</div>
                 <div>Rank: {this.props.user['Scout-Rank']}</div>
                 <div>Sex: {this.props.user['Scout-Sex']}</div>
                 <div>BSA ID: {this.props.user['Scout-BSA ID']}</div>
                 <div>Positions: {this.props.user['Scout-Positions(s)']}</div>
                 <div>Street: {this.props.user['Scout-Street']}</div>
                 <div>City: {this.props.user['Scout-City']}</div>
                 <div>State: {this.props.user['Scout-State']}</div>
                 <div>Zip: {this.props.user['Scout-Zip']}</div>
                 <div>Home Phone: {this.props.user['Scout-Home Phone']}</div>
                 <div>Cell Phone: {this.props.user['Scout-Cell Phone']}</div>
                 <div>Email: {this.props.user['Scout-Email 1']}</div>
                 <div>Parent1-Full Name: {this.props.user['Parent1-Full Name']}</div>
                 <div>Parent1-Sex: {this.props.user['Parent1-Sex']}</div>
                 <div>Parent1-Positions(s): {this.props.user['Parent1-Positions(s)']}</div>
                 <div>Street: {this.props.user['Parent1-Street']}</div>
                 <div>City: {this.props.user['Parent1-City']}</div>
                 <div>State: {this.props.user['Parent1-State']}</div>
                 <div>Zip: {this.props.user['Parent1-Zip']}</div>
                 <div>Parent1-Home Phone: {this.props.user['Parent1-Home Phone']}</div>
                 <div>Parent1-Cell Phone: {this.props.user['Parent1-Cell Phone']}</div>
                 <div>Parent1-Work Phone: {this.props.user['Parent1-Work Phone']}</div>
                 <div>Parent1-Email 1: {this.props.user['Parent1-Email 1']}</div>
                 <div>Parent1-Email 2: {this.props.user['Parent1-Email 2']}</div>
                 <div>Parent2-Full Name: {this.props.user['Parent2-Full Name']}</div>
                 <div>Parent2-Sex: {this.props.user['Parent2-Sex']}</div>
                 <div>Parent2-Positions(s): {this.props.user['Parent2-Positions(s)']}</div>
                 <div>Street: {this.props.user['Parent2-Street']}</div>
                 <div>City: {this.props.user['Parent2-City']}</div>
                 <div>State: {this.props.user['Parent2-State']}</div>
                 <div>Zip: {this.props.user['Parent2-Zip']}</div>
                 <div>Parent2-Home Phone: {this.props.user['Parent2-Home Phone']}</div>
                 <div>Parent2-Cell Phone: {this.props.user['Parent2-Cell Phone']}</div>
                 <div>Parent2-Work Phone: {this.props.user['Parent2-Work Phone']}</div>
                 <div>Parent2-Email 1: {this.props.user['Parent2-Email 1']}</div>
                 <div>Parent2-Email 2: {this.props.user['Parent2-Email 2']}</div>
                 <hr />
            </div>
        )
    }
}

//return props from state
function mapStateToProps(state) {
    return {
        user: state.activeuser
    }
}


export default connect(mapStateToProps)(UserDetail);