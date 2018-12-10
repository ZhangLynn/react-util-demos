import React, { Component } from 'react';
import { Layout } from 'antd';
import SiderMenu from '../components/SiderMenu'
import Loadable from 'react-loadable';
import {
    Route,
    Switch
} from 'react-router-dom';
import style from './BasicLayout.less'
import Error from '../pages/error'
import singleMenuData from '../menu/singleMenu'
import MyLoadingComponent from '../utils/MyLoadingComponent';
const TodoApp = Loadable({
    loader: () => import('../pages/todoapp'),
    loading: MyLoadingComponent
});
const TableDemo = Loadable({
    loader: () => import('../testComponent/tableDemo'),
    loading: MyLoadingComponent
});
const HighOrderUsage = Loadable({
    loader: () => import('../pages/highOrderUsage'),
    loading: MyLoadingComponent
})
const Hoc = Loadable({
    loader: () => import('../pages/hoc'),
    loading: MyLoadingComponent
})
export default class BasicLayout extends Component {
    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <SiderMenu
                    menuData={singleMenuData}
                />
                <Layout>
                    <Switch>
                        <Route exact path="/" component={TodoApp}/>
                        <Route exact path="/todoApp" component={TodoApp}/>
                        <Route path="/tableDemo" component={TableDemo}/>
                        <Route path='/highOrderUsage' component={HighOrderUsage}/>
                        <Route path='/error' component={Error}></Route>
                        <Route path='/hoc' component={Hoc}></Route>
                    </Switch>
                </Layout>
            </Layout>
        )
    }
}