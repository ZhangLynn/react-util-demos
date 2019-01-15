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
const Flowchart = Loadable({
    loader: () => import('../components/flowchart/flowchart'),
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
const Algorithm = Loadable({
    loader: () => import('../pages/algorithm'),
    loading: MyLoadingComponent
})
const Webpack = Loadable({
    loader: () => import('../pages/webpack'),
    loading: MyLoadingComponent
})
const Hooks = Loadable({
    loader: () => import('../pages/hooks'),
    loading: MyLoadingComponent
})
const PublishPage = Loadable({
    loader: () => import('../pages/publish'),
    loading: MyLoadingComponent
});
const Event = Loadable({
    loader: () => import('../pages/event'),
    loading: MyLoadingComponent
});
const Performance = Loadable({
    loader: () => import('../pages/performance'),
    loading: MyLoadingComponent
});
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
                        <Route path="/flowchart" component={Flowchart}/>
                        <Route path='/highOrderUsage' component={HighOrderUsage}/>
                        <Route path='/error' component={Error}></Route>
                        <Route path='/hoc' component={Hoc}></Route>
                        <Route path='/algorithm' component={Algorithm}></Route>
                        <Route path='/webpack' component={Webpack}></Route>
                        <Route path='/hooks' component={Hooks}></Route>
                        <Route path='/publish' component={PublishPage}></Route>
                        <Route path='/event' component={Event}></Route>
                        <Route path='/performance' component={Performance}></Route>
                    </Switch>
                </Layout>
            </Layout>
        )
    }
}
