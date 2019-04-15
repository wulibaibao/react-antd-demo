import React from 'react'
import { inject , observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import { Layout , Icon } from 'antd'
import MenuComponent from '@/Components/Container/Menu'
import '@/Components/Container/index.scss'

const { Header, Sider, Content } = Layout;

@withRouter
@inject('store')
@observer
class ContainerComponent extends React.Component {
    state = {
        collapsed: false,
    };
    
    toggle = () => this.setState({ collapsed: !this.state.collapsed, });

    render() {
        let ContentComponent = this.props.component;

        return (
            <Layout style={{ height:"100%", }}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={ this.state.collapsed }
                >
                    <div className="logo" style={{ height: 32 , background: "rgba(255,255,255,.2)" , margin: 16  }}/>
                    <MenuComponent />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        style={{ fontSize : 20 , padding: "0 24px" , cursor : 'pointer'}}
                        onClick={this.toggle}
                    />
                    </Header>
                    <Content 
                        style={{
                            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, overflowY: "scroll"
                        }}
                    >
                        <ContentComponent  { ...this.props }/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default ContainerComponent ;