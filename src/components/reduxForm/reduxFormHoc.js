/**
 * created by LynnZhang on 2019/1/21
 */
import { Form } from 'antd';
import PropTypes from 'prop-types';
const WrapReduxForm = InitForm => Form.create({
    mapPropsToFields(props){
        const { formFields } = props;
        return Object.keys(formFields).reduce((fileds, field) => ({
            ...fileds,
            [field]: Form.createFormField({
                value: formFields[field]
            })
        }), {})
    },
    onFieldsChange(props, fields) {
        const { changeForm, formFields, resetForm } = props;
        if (Object.keys(fields).join(',') === Object.keys(formFields).join(',') && Object.keys(fields).reduce((result, next) => (result && !next.value), true)) {
            resetForm();
            return
        }
        Object.keys(fields).reduce((data, field) => {
            changeForm({
                ...data,
                [field]: fields[field].value
            });
        }, {})
    }
})(InitForm);

WrapReduxForm.protoTypes = {
    formFields: PropTypes.object.isRequired,
    changeForm: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired
}

export default WrapReduxForm
