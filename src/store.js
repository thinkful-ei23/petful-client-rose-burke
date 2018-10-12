import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension';


// for dev
export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

// export const store = createStore(rootReducer, 
//   applyMiddleware(thunk)
// );