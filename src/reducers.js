// import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { ignoreActions } from 'redux-ignore';
import {reducer as todoReducer} from './components/todos';
import {reducer as filterReducer} from './components/filter';
import {reducer as movieReducer} from './components/asyncHttp'
import formReducer from './components/reduxForm/reducer'
// 派发了一个action 全局所有的reducer都会被触发 基于对这部分性能损坏的考虑 尝试了一个库 忽略与自身无关的action
export default combineReducers({
    todos: todoReducer,
    filter: filterReducer,
    form: formReducer,
    movie: ignoreActions(movieReducer, ['TODO/ADD'])
});
