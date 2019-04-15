import React from 'react';
import { inject , observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'

const { Content } = Layout

@withRouter
@inject('store')
@observer
class UserComponentLast extends React.Component{

    render(){
        return (
            <Content>
                { this.props.match.url } User Component Last
            </Content>
        )
    }
}

export default UserComponentLast;