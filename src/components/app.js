import React, { Component } from 'react';
import HistoryList from '../containers/history-list';
import HistoryDetail from '../containers/history-detail';
import SearchBar from '../containers/search_bar';
import UserList from '../containers/userList';
import UserDetail from '../containers/user-detail';
import SimpleForm from '../components/SimpleForm';


class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <div id="container">
          <UserList />
          <HistoryList />
          <HistoryDetail />
          <UserDetail />
          <SimpleForm />
        </div>  
    </div>
    );
  }
}

export default App;