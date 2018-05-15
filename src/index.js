import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import App from './components/app';
import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware()(createStore,thunk);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
  
function configureStore() {  
  return createStore(
    reducers,
    applyMiddleware(thunk)
  );
}

ReactDOM.render(
<Provider store={configureStore()}>
<App />
</Provider>
, document.querySelector('.container'));
registerServiceWorker();