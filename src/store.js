import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axiosMiddleware from './utils/middleWare/axiosMiddleware'
import reducers from './reducers';
/**
    使用中间件的写法
 */
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, axiosMiddleware)
);
export default store
