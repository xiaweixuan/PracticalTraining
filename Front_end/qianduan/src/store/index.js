import {createStore,applyMiddleware} from 'redux';
import todo from './reducer';
import thunk from 'redux-thunk';

let store = createStore(todo,applyMiddleware(thunk));
export default store;