import React from 'react';
import { inject , observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'

const { Content } = Layout

@withRouter
@inject('store')
@observer
class UserFirstComponent extends React.Component{

    render(){
        return (
            <Content>
                UserFirstComponent
            </Content>
        )
    }
}

export default UserFirstComponent;