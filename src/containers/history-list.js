import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllHistory,selectHistory} from '../actions/index';
import {bindActionCreators} from 'redux';
import firebase from '../actions/fire';

class HistoryList extends Component{
    componentWillMount(){
        this.props.actions.getAllHistory();
 
    }

    renderList() {
        return this.props.histories.map((history) => {
            const {fdate, description, deposit,withdraw,cashin,cashout} = history;
            return(
                <tr
                    onClick={()=> this.props.actions.selectHistory(history)}
                    key={history.fdate+history.description} >
                
                    <td>{fdate}</td>
                    <td>{description}</td>
                    <td>{deposit}</td>
                    <td>{withdraw}</td>
                    <td>{cashin}</td>
                    <td>{cashout}</td>
                </tr>
            );
        });
    }

    render(){
        return (
            <div id="sidebar">
            {/* <!--Table--> */}
            <table className="table table-striped">
            
                {/* <!--Table head--> */}
                <thead className="blue-grey lighten-4">
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Deposit</th>
                        <th>Withdraw</th>
                        <th>CashIn</th>
                        <th>CashOut</th>
                    </tr>
                </thead>
                {/* <!--Table head-->
            
                <!--Table body--> */}
                <tbody>
                    {this.renderList()}
                    
                </tbody>
                {/* <!--Table body--> */}
            
            </table>
            {/* <!--Table--> */}
            </div>
        )
    }
}

//return props from state
function mapStateToProps(state) {
    return {
        histories: state.histories.all
    }
}
//action trigger to all reducers, return into props
// function mapDispatchToPros(dispatch){
//     return bindActionCreators({getAllHistory: getAllHistory},dispatch);
//         // selectHistory: bindActionCreators({selectHistory: selectHistory},dispatch) };
  
// }
function mapDispatchToPros(dispatch){
    return{
        actions:{
            getAllHistory: bindActionCreators(getAllHistory,dispatch),
            selectHistory: bindActionCreators(selectHistory,dispatch)
        }
    };
}

//export default connect(mapStateToProps, mapDispatchToPros)(BookList);
export default connect(mapStateToProps,mapDispatchToPros)(HistoryList);
