import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectHistory} from '../actions/index';
import {bindActionCreators} from 'redux';

class HistoryDetail extends Component{
    

    render(){
        console.log('entry detail:');
        if(!this.props.history){
            return <div>please select entry</div>;
        }
        console.log('detail:' + this.props.history.description);

        return (
            <div id="context">
                 <h3>Details:</h3>
                 <h4><div>{this.props.history.fdate}</div></h4>
                 <hr />
                 <div>description: {this.props.history.description}</div>
                 <div>deposit:     {this.props.history.deposit}</div>
                 <div>withdraw:    {this.props.history.withdraw}</div>
                 <div>cashin:      {this.props.history.cashin}</div>
                 <div>cashout:     {this.props.history.cashout}</div>
                 <div>by:          {this.props.history.user}</div>
                 <hr />
            </div>
        )
    }
}

//return props from state
function mapStateToProps(state) {
    return {
        history: state.activehistory
    }
}


export default connect(mapStateToProps)(HistoryDetail);