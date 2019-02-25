// import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { ignoreActions } from 'redux-ignore';
import todoReducer from './components/todoApp/data/todos/reducer';
import filterReducer from './components/todoApp/data/filter/reducer';
import {reducer as movieReducer} from './components/asyncHttp'
import formReducer from './components/reduxForm/reducer'
// 派发了一个action 全局所有的reducer都会被触发 基于对这部分性能损坏的考虑 尝试了一个库 忽略与自身无关的action
export default combineReducers({
    todos: todoReducer,
    filter: filterReducer,
    form: formReducer,
    movie: ignoreActions(movieReducer, ['TODO/ADD'])
});
