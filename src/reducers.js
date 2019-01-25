// import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import {reducer as todoReducer} from './components/todos';
import {reducer as filterReducer} from './components/filter';
import {reducer as asyncHttpReducer} from './components/asyncHttp'
import formReducer from './components/reduxForm/reducer'
export default combineReducers({
    todos: todoReducer,
    filter: filterReducer,
    form: formReducer,
    movie: asyncHttpReducer
});
