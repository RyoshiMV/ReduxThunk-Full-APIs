import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productReducer } from './reducer';


// store đang quản lý all state;
// VIEW CONTEXT REACTJS
export const store = createStore(productReducer, applyMiddleware(thunk));