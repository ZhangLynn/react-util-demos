import { INIT_DATA } from './actionTypes.js';
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
    }
}

export default actions
