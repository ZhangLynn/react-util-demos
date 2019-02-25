import { INIT_DATA, GET_TOP_DATA } from './actionTypes.js';
// http://192.168.2.58:8181/auth/projects
const actions = {
    initData: function(data) {
        return {
            type: INIT_DATA,
            payload: {
                request: {
                    method: 'get',
                    url: 'movie/in_theaters',
                    data
                }
            }
        }
    },
    getTop20: function(data) {
        return {
            type: GET_TOP_DATA,
            payload: {
                request: {
                    method: 'get',
                    url: 'movie/top250',
                    data
                }
            }
        }
    }
}

export default actions
