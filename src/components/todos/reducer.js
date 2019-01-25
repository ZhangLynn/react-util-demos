import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes.js'

function updateTodo(state, newValue) {
    return [
        newValue,
        ...state
    ]
}

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            alert(1)
            const list = [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                },
                ...state
            ];
            console.log(list)
            // return [
            //     {
            //         id: action.id,
            //         text: action.text,
            //         completed: false
            //     },
            //     ...state
            // ]
        }
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
