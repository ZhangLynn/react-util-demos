/**
 * created by LynnZhang on 2019/1/25
 */
import { COMMON } from '../constants/actionTypes'

const actions = {
    optLoading: function(data) {
        return {
            type: COMMON.OPT_LOADING,
            data
        }
    },
    optSuccess: function(data) {
        return {
            type: COMMON.OPT_SUCCESS,
            data
        }
    },
    optError: function(data) {
        return {
            type: COMMON.OPT_ERROR,
            data
        }
    }
}

export default actions
