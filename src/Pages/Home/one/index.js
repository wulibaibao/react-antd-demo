import React from 'react';
import { inject , observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'

const { Content } = Layout

@withRouter
@inject('store')
@observer
class HomeComponentFirst extends React.Component{

    render(){
        return (
            <Content>
                { this.props.match.url  } Home Component First
            </Content>
        )
    }
}

export default HomeComponentFirst;