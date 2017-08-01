import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import loginReducer from './reducers/loginReducer';

export default createStore(combineReducers({loginReducer}), {}, applyMiddleware(
    logger,
    thunk,
    promise()
));