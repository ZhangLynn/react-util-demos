/**
 * created by LynnZhang on 2019/1/21
 */
import React from 'react';
import { Form, Input, Button } from 'antd';
import WrapReduxForm from './reduxFormHoc'
const FormItem = Form.Item;
@WrapReduxForm
class ReduxFormDemo extends React.Component{
    reset= () => {
        this.props.form.resetFields()
    }
    render() {
        const { getFieldProps } = this.props.form;
        const username = getFieldProps('username', {
            rules: [
                { required: true, message: '请输入用户名' },
            ],
        });

        const password = getFieldProps('password', {
            rules: [
                { required: true, message: '请输入密码' },
            ],
        });

        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return <React.Fragment>
            <Form key="form">
                <FormItem
                    {...formItemLayout}
                    id="username"
                    label="用户名："
                >
                    <Input type="text" {...username} size="large" />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    id="password"
                    label="密码"
                >
                    <Input type="password" {...password} size="large" />
                </FormItem>
                <Button type='primary' onClick={this.reset}>reset</Button>
            </Form>
        </React.Fragment>
    }
}
export default ReduxFormDemo
