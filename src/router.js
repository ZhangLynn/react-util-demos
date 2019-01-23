import React, {Component} from 'react';
import {
    BrowserRouter,
    HashRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';
//配置antd组件的中文
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
//路由的按需加载
import Loadable from 'react-loadable';
import MyLoadingComponent from './utils/MyLoadingComponent';
const BasicLayout = Loadable({
    loader: () => import("./layouts/BasicLayout"),
    loading: MyLoadingComponent
});
const page404 = (props)=>(
    <div>404
        <div>
            {JSON.stringify(props)}
        </div>
    </div>
)
const login=(props)=>{
    const toOther = () => {
        console.log(props)
        props.history.push({
            pathname: '/404',
            state: {
                msg: '来自首页的问候！by state'
            }
        });
    }
    return (
        <div>
            <h1>登录页</h1>
            <button onClick={toOther}>state 跳转</button>
        </div>
    )
}
class Router extends Component {
    render() {
        return (
            // 将antd组件配置为中文
            <LocaleProvider locale={zhCN}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login"  component={login}/>
                        <Route path='/404' component={page404}/>
                        <Route path="/"  component={BasicLayout}/>
                    </Switch>
                </BrowserRouter>
            </LocaleProvider>
        )
    }
}
export default Router
