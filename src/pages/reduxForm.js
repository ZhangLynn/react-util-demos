/**
 * created by LynnZhang on 2019/1/21
 */
import React from 'react';
import { connect } from 'react-redux'
import { Tabs } from 'antd';
import ReduxFormDemo from "../components/reduxForm/reduxForm";
const TabPane = Tabs.TabPane;
class ReduxForm extends React.Component{
    resetForm = () => {
        this.props.ChangeFileds({
            username: '11',
            password: '0701'
        })
    };

    render() {
        return <React.Fragment>
            <Tabs defaultActiveKey="1">
                <TabPane tab="redex-form" key="1">
                    <ReduxFormDemo formFields={this.props.fields} changeForm={this.props.ChangeFileds} resetForm={this.resetForm}/>
                </TabPane>
            </Tabs>
        </React.Fragment>
    }
}
const mapStateToProps = (state) => {
    return {
        fields: state.form
    };
}
const ChangeFileds = (fileds) => {
    return {
        type: 'ChangeFileds',
        payload: fileds
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ChangeFileds: (value) => {
            dispatch(ChangeFileds(value));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm);
