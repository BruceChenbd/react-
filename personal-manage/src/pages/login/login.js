import React from 'react';
import createHistory from 'history/createHashHistory'
import './login.less';
import { Redirect } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox,Card,message } from 'antd';
import { connect } from 'react-redux';
import { login } from '../../actions/action';

const history = createHistory()
class Login extends React.Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.dispatch(login(values))
            history.push('/home')
            message.info('登陆成功！')
          }
        });
    };
    render() {
            const { getFieldDecorator } = this.props.form;
            return (
                <div className="login-wrap">
                     <div>
                     <div className="loginTitle">欢迎登录CBD管理系统</div>
                        <Card>
                            <Form className="login-form" onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名!' }],
                                })(
                                    <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                    />,
                                )}
                                </Form.Item>
                                <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                    />,
                                )}
                                </Form.Item>
                                <Form.Item className="remember">
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>记住密码</Checkbox>)}
                                <a className="login-form-forgot" href="">
                                    忘记密码
                                </a>
                                </Form.Item>
                                <Button type="primary" style={{width:'100%'}} htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                            </Form>
                        </Card>
                     </div>
                </div>
            )
        }
    }
const mapStateToProps = (state, ownProps) => {
    return {
        username: state.username,
        loginstatus: state.loginstatus
    }
}
export default connect(mapStateToProps)(Form.create()(Login))