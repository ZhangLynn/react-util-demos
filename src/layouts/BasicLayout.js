import React, { Component } from 'react';
import { Layout } from 'antd';
import SiderMenu from '../components/SiderMenu'
import Loadable from 'react-loadable';
import {
    Route,
    Switch
} from 'react-router-dom';
import style from './BasicLayout.less'
import MyLoadingComponent from '../utils/MyLoadingComponent';
const TodoApp = Loadable({
    loader: () => import("../pages/todoapp"),
    loading: MyLoadingComponent
});
const TableDemo = Loadable({
    loader: () => import("../testComponent/tableDemo"),
    loading: MyLoadingComponent
});
const HighOrderUsage = Loadable({
    loader: () => import('../pages/highOrderUsage'),
    loading: MyLoadingComponent
})
import singleMenuData from '../menu/singleMenu'
export default class BasicLayout extends Component {

    componentDidMount() {
        window.onerror = (a, b, c, d, e) => {
            console.log(a)
            console.log(b)
            console.log(c)
            console.log(d)
            console.log(e)
        }
        window.addEventListener('error', (event) => {
            console.log(event)
        }, true)
        console.log(a)
    }
    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <img src="www.jhshs.com" alt=""/>
                <SiderMenu
                    menuData={singleMenuData}
                />
                <Layout>
                    <Switch>
                        <Route exact path="/" component={TodoApp}/>
                        <Route exact path="/todoApp" component={TodoApp}/>
                        <Route path="/tableDemo" component={TableDemo}/>
                        <Route path='/highOrderUsage' component={HighOrderUsage}/>
                    </Switch>
                </Layout>
            </Layout>
        )
    }
}