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
// loadable的各种用法
const TodoApp = Loadable({
    loader: () => import('../pages/todoapp'),
    delay: 300,
    timedOut: 5000,
    // render(loaded, props) {
    //     let Component = loaded.namedExport;
    //     console.log(props)
    //     return <Component {...props}/>;
    // },
    loading: MyLoadingComponent
});
const Flowchart = Loadable({
    loader: () => import('../components/flowchart/flowchart'),
    loading: MyLoadingComponent
});
const HigherUsage = Loadable({
    loader: () => import('../pages/higherUsage'),
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
const ReduxForm = Loadable({
    loader: () => import('../pages/reduxForm'),
    loading: MyLoadingComponent
});
const Prototype = Loadable({
    loader: () => import('../pages/prototype'),
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
                        <Route path="/flowchart" component={Flowchart}/>
                        <Route path='/error' component={Error}/>
                        <Route path='/higherUsage' component={HigherUsage}/>
                        <Route path='/algorithm' component={Algorithm}/>
                        <Route path='/webpack' component={Webpack}/>
                        <Route path='/hooks' component={Hooks}/>
                        <Route path='/publish' component={PublishPage}/>
                        <Route path='/event' component={Event}/>
                        <Route path='/performance' component={Performance}/>
                        <Route path='/reduxForm' component={ReduxForm}/>
                        <Route path='/prototype' component={Prototype}/>
                    </Switch>
                </Layout>
            </Layout>
        )
    }
}
