import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes.js'

function updateTodo(state, action) {
    return [
        ...state,
        {
            id: action.id,
            text: action.text,
            completed: false
        }
    ]
}

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: return updateTodo(state, action);
        case TOGGLE_TODO: {
            return state.map((todoItem) => {
                if (todoItem.id === action.id) {
                    return {...todoItem, completed: !todoItem.completed}
                } else {
                    return todoItem
                }
            })
        }
        case REMOVE_TODO: {
            return state.filter((todoItem) => {
                return todoItem.id !== action.id
            })
        }
        default: {
            return state
        }
    }
}

export default todoReducer;
