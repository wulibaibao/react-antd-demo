import React from 'react';
import { inject , observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'

const { Content } = Layout

@withRouter
@inject('store')
@observer
class UserComponentFirst extends React.Component{

    render(){
        console.log( this )
        return (
            <Content>
                { this.props.match.url } User Component First
            </Content>
        )
    }
}

export default UserComponentFirst;