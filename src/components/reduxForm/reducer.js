/**
 * created by LynnZhang on 2019/1/21
 */
const initState = {
    username: '11',
    password: '0701'
}
export default (state = initState, action) => {
    switch (action.type) {
        case 'ChangeFileds': {
            state = {
                ...state,
                ...action.payload
            }
        }
        default: {
            return state
        }
    }

}
