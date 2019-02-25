import { INIT_DATA, GET_TOP10_DATA } from './actionTypes.js';
import { combineReducers } from 'redux';
const initState = {
    movieList: []
}

const initList = (state = {}, action) => {
    switch (action.type) {
        // 这个成功的type字段是redux-axios-promise自动添加的 所以我们只需要写一个基础的type
        case `${INIT_DATA}_SUCCESS`: {
            let subjects = {};
            action.payload.subjects.map(subject => {
                subjects[subject.id] = subject;
            })
            return {
                ...state,
                ...subjects
            }
        }
        default: {
            return state
        }
    }
}

export default combineReducers({
    movieList: initList
});
