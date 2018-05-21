import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllUsers,selectUser,selectUserSearch} from '../actions/index';
import {bindActionCreators} from 'redux';



class UserList extends Component{
    constructor(props){
        super(props);
        this.state = { sortAscending: false };
    }
    
    componentWillMount(){
        this.props.actions.getAllUsers();
    }

    renderList() {
        const list = this.props.users.map((user) =>{ 
            return(
                <tr 
                    onClick={()=> this.props.actions.selectUserSearch(user, this.state.sortAscending)}
                    key={user['Scout-Full Name']} >
                    <td>{user['Scout-Full Name']}</td>
                    <td>
                        <span className="input-group-btn" >
                            <button type="submit" className="btn btn-secondary" onClick={()=> this.props.actions.selectUser(user)}>...
                            </button>
                        </span>
                    </td>

                </tr>
            );
        });
        return list;
    }


    render(){
        return (
            <div id="sidebarleft">
            {/* <!--Table--> */}
            <table className="table table-striped">
            
                {/* <!--Table head--> */}
                <thead className="blue-grey lighten-4">
                    <tr>
                        <th>UserName</th>
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
        users: state.users.all
    }
}
function mapDispatchToPros(dispatch){
    return{
        actions:{
            getAllUsers: bindActionCreators(getAllUsers,dispatch),
            selectUser: bindActionCreators(selectUser,dispatch),
            selectUserSearch: bindActionCreators(selectUserSearch,dispatch),
        }
    };
}

//export default connect(mapStateToProps, mapDispatchToPros)(BookList);
export default connect(mapStateToProps,mapDispatchToPros)(UserList);
