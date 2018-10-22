import React from 'react';
import { inject , observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'

import { Layout } from 'antd'

@withRouter
@inject('store')
@observer
class LoginComponent extends React.Component{

    render(){
        return (
            <Layout style={{ textAlign:'center' }}>
                /login
            </Layout>
        )
    }
}

export default LoginComponent;