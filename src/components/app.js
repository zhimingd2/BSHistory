import React, { Component } from 'react';
import HistoryList from '../containers/history-list';
import HistoryDetail from '../containers/history-detail';
import SearchBar from '../containers/search_bar';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <div id="container">
          <HistoryList />
          <HistoryDetail />
        </div>  
    </div>
    );
  }
}

export default App;