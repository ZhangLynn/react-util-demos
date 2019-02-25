import {Message} from 'antd'
// import { browserHistory } from 'react-router';
import commonAction from '../../actions/common'
import Ajax from './ajax'

const axiosMiddlewareConfig = {
    // 请求出错时返回Promise reject
    returnRejectedPromiseOnError: true,
    // 拦截器
    interceptors: {
        request: [
            {
                // 处理成功请求
                success: ({getState, dispatch, getSourceAction}, config) => {
                    config.reqId = new Date().getTime()
                    config.cancelToken = Ajax.addRequest(config.reqId)
                    // dispatch(commonAction.optLoading('正在操作'));
                    // btnLoading用于按钮确定的Loading状态，在结果返回时要设置为false
                    // dispatch(commonAction.btnLoading(true));
                    // 如果是jsonp，则设置适配器来处理请求
                    if (config.jsonp) {
                        config.adapter = config => Ajax.jsonp(config)
                    }
                    let user = localStorage.getItem('user')
                    if (user) {
                        user = JSON.parse(user)
                        const accessToken = user.access_token
                        config.headers.Authorization = `Bearer ${accessToken}`
                    }
                    // if (config.method === 'get') {
                    //     let params = Object.assign({}, config.data);
                    //     config.params = Object.keys(config.data).reduce((param, key) => {
                    //         return {
                    //             ...param,
                    //             [key]: params[key]
                    //         }
                    //     }, {});
                    //     config.data = {}
                    // }
                    return config
                },
                // 处理失败请求
                error: ({getState, dispatch, getSourceAction}, error) => {
                    Promise.reject(error)
                },
            },
        ],
        response: [
            {
                // 处理成功返回
                success: ({getState, dispatch, getSourceAction}, res) => {
                    // 请求完成,移除cencel栈
                    Ajax.removeRequest(res.config.reqId)
                    // dispatch(commonAction.btnLoading(false));
                    const {data, status, statusText} = res
                    // 判断服务端返回状态是否正确
                    const isSuccess = data && status === 200
                    if (isSuccess) {
                        dispatch(commonAction.optSuccess(statusText))
                    } else if (status === 401) {

                    } else if (status === 403) {

                    } else if (status === 400) {

                    } else {
                        Message.error(statusText)
                    }
                    return data
                },
                // 处理失败返回
                error: ({getState, dispatch, getSourceAction}, error) => {
                    // btnLoading用于按钮确定的Loading状态，在结果返回时要设置为false
                    // dispatch(commonAction.btnLoading(false));
                    // 取消操作错误不发出
                    if (!Ajax.axios.isCancel(error)) {
                        // Message.error('网络异常');
                        // dispatch(commonAction.optError('网络异常'))
                        return Promise.reject(error)
                    }
                },
            },
        ],
    },
}

export default axiosMiddlewareConfig
