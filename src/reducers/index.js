import { combineReducers } from 'redux';
import HistoriesReducer from './reducer-histories';
import ActiveHistory from './reducer-active-history';
import ActiveUser from './reducer-active-user';
import UsersReducer from './reducer-user';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
   histories: HistoriesReducer,
   activehistory: ActiveHistory,
   users: UsersReducer,
   activeuser: ActiveUser,
  form: formReducer
});

export default rootReducer;
