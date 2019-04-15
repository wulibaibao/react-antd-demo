import React from 'react';
import { inject , observer } from 'mobx-react';
import { withRouter , Link } from 'react-router-dom'
import { Layout } from 'antd'

const { Content } = Layout;

const Config = [
    {
        'meta' : '首页',
        'path' : '/index',
    },
    {
        'meta' : '用户主页',
        'path' : '/user',
    },
    {
        'meta' : '登录页',
        'path' : '/login',
    }
]

@withRouter
@inject('store')
@observer
class ContainerComponents extends React.Component{
    state={
        system : process.env.NODE_ENV === 'development' ? '开发' : '生产',
    }

    render(){
        let Component = this.props.component;
        return (
            <Content>
                <h3>{ `所在环境：${this.state.system}` }</h3>
                <a href="https://www.wulibaibao.com/" __target="blank"><h3>https://www.wulibaibao.com/</h3></a>
                <div>
                    {
                        Config.map( item => 
                            (
                                <Link 
                                    style={{ 
                                        marginRight:'1em' 
                                    }} 
                                    to={ item.path } 
                                    key={ item.path }
                                >
                                    { item.meta }
                                </Link>
                            )
                        )
                    }
                </div>
                <Component {...this.props} />
            </Content>
        )
    }
}

export default ContainerComponents;