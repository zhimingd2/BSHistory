import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllHistory,selectHistory} from '../actions/index';
import {bindActionCreators} from 'redux';
import firebase from '../actions/fire';

const Total = ({ histories }) => (
    <h3>
      Deposit: 
      {histories.reduce((sum, history) => (
        sum += parseFloat(history.deposit)
      ), 0.0)}
    </h3>
  )

class HistoryList extends Component{
    constructor(props){
        super(props);
        this.state = { sortAscending: false };
    }

    componentWillMount(){
        this.props.actions.getAllHistory(this.state.sortAscending);
    }
    renderList() {
        const list = this.props.histories.map((history) =>{ 
            const {fdate, description, deposit,withdraw,cashin,cashout} = history;
            return(
                <tr
                    onClick={()=> this.props.actions.selectHistory(history)}
                    key={history.fdate+history.description+history.deposit} >
                
                    <td>{fdate}</td>
                    <td>{description}</td>
                    <td>{deposit}</td>
                    <td>{withdraw}</td>
                    <td>{cashin}</td>
                    <td>{cashout}</td>
                </tr>
            );
        });
        return list;
    }

    getData(term) {
        const dd = isNaN(term) || (term == '')  ? 0 : parseFloat(term);
        return dd;
    }

    showDollar( number ){
        return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    }
    renderTotal() {
        const total = this.props.histories.reduce((total, history) =>{ 
            const {fdate, description, deposit,withdraw,cashin,cashout} = history;
            total['deposit'] += this.getData(deposit);
            total['withdraw'] += this.getData(withdraw);
            total['cashin'] += this.getData(cashin);
            total['cashout'] += this.getData(cashout);
            return total;

        },{ 'deposit':0.0,'withdraw':0.0, 'cashin':0.0, 'cashout':0.0});
        const totalValue = total['deposit'] - total['withdraw'] + total['cashin'] - total['cashout']
        
        return(
            <tr>
                <td>{this.showDollar(totalValue)}</td>
                <td>Total</td>
                <td>{this.showDollar(total['deposit'])}</td>
                <td>{this.showDollar(total['withdraw'])}</td>
                <td>{this.showDollar(total['cashin'])}</td>
                <td>{this.showDollar(total['cashout'])}</td>
            </tr>
        );
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
                    {this.renderTotal()}
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
