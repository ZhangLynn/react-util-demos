import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import Ajax from './utils/middleWare/ajax';
import axiosMiddlewareConfig from './utils/middleWare/axios.middleware_config'
import reducers from './reducers';
const logger = store => next => action => {
    console.log('dispatch', action);
    next(action);
    console.log('finish', action)
}
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, axiosMiddleware(Ajax, axiosMiddlewareConfig))
);
export default store
