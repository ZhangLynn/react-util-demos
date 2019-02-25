import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import store from './store';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
//资源缓存插件 在生产环境中为用户在本地创建一个service worker 来缓存资源到本地，提升应用的访问速度
import registerServiceWorker from './registerServiceWorker';
// fundebug的使用
// let fundebug = require("fundebug-javascript");
// fundebug.apikey = "10fabdd335727900645715292e89428717b86415b95200d60ebf1e5fe13f5e8a";
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.log(info)
        // 将component中的报错发送到Fundebug
        // fundebug.notifyError(error, {
        //     metaData: {
        //         info: info
        //     }
        // });
    }

    render() {
        if (this.state.hasError) {
            return null;
            // Note: 也可以在出错的component处展示出错信息，返回自定义的结果。
        }
        return this.props.children;
    }
}
const render = Component => {
    ReactDOM.render(
        //绑定redux、热加载
        <Provider store={store}>
            <AppContainer>
                {/*<ErrorBoundary>*/}
                    <Component/>
                {/*</ErrorBoundary>*/}
            </AppContainer>
        </Provider>,
        document.getElementById('root'),
    )
}

render(Router);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./router', () => {
        render(Router);
    })
}

registerServiceWorker();
