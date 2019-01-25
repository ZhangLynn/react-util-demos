import { INIT_DATA} from './actionTypes.js'
const initState = {
    list: []
}

export default (state = initState, action) => {
    switch (action.type) {
        // 这个成功的type字段是redux-axios-promise自动添加的 所以我们只需要写一个基础的type
        case `${INIT_DATA}_SUCCESS`: {
            return {
                ...state,
                list: action.payload.value
            }
        }
        default: {
            return state
        }
    }
}
