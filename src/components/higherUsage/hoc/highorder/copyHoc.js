/**
 * created by LynnZhang on 2018/12/9
 */
import gotem from 'gotem';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {message} from 'antd';
const copy = (targetName) => {
    return (WrappedComponent) => {
        return class extends Component {
            componentDidMount() {
                const ctx = this;
                const dom = ReactDom.findDOMNode(ctx);
                const nodes = {
                    trigger: dom,
                    // targetName为DOM选择器，复制组件将会复制它的值
                    target: dom.querySelector(targetName)
                };
                gotem(nodes.trigger, nodes.target, {
                    success: function () {
                        message.success('复制成功');
                    },
                    error: function () {
                        message.error('复制失败，请手动输入');
                    }
                });
            }
            render() {
                return <WrappedComponent {...this.props}/>;
            }
        };
    };
}
export default copy
// 使用
// 传入 h3 ，让复制组件去获取它的值
@copy('h3')
class Info extends Component {
    render() {
        return (
            <div>
                <h3>
                    阿里云,点击复制这段文字
                </h3>
            </div>
        );
    }
}
