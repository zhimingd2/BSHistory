import { combineReducers } from 'redux';
import HistoriesReducer from './reducer-histories';
import ActiveHistory from './reducer-active-history';

const rootReducer = combineReducers({
  histories: HistoriesReducer,
  activehistory: ActiveHistory
});

export default rootReducer;
