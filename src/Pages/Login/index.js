import React from 'react';
import { inject , observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'

import { Layout } from 'antd'

import {
    Form, Icon, Input, Button, Card,
} from 'antd';

@withRouter
@inject('store')
@observer
class LoginComponent extends React.Component{

    render(){
        console.log( this )
        return (
            <Layout 
                style={{ 
                    textAlign:'center' ,
                    backgroundImage:'url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg)',
                    height:'100vh'
                }}
            >
                <Card
                    style={{ width:300,height:270,position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)' }}
                >
                    <h1>登录页</h1>
                    <WrappedNormalLoginForm />
                </Card>
            </Layout>
        )
    }
}

export default LoginComponent;

@withRouter
class NormalLoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values , this);
                this.props.history.push('/user/one')
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {
                        getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username 任意内容" />
                        )
                    }
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password 任意内容" />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
  
  const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);