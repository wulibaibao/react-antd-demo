import React from 'react'
import { inject , observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { Menu , Icon } from 'antd'
import router from '@/Router/RouteConfig'
import MenuItem from 'antd/lib/menu/MenuItem';

const { SubMenu } = Menu;

@withRouter
@inject('store')
@observer
class MenuComponent extends React.Component {

    render () {
        let collapsed = this.props.store.collapsed
        let store = this.props.store;


        const defaultOpenKeys = router.map( item => item.path )
        console.log( defaultOpenKeys )

        //[`/${ this.props.location.pathname.split('/')[1] }`]

        return (
            <Menu 
                defaultSelectedKeys={ [ this.props.location.pathname ] }
                theme="dark" 
                defaultOpenKeys={ defaultOpenKeys }
                mode="inline" 
                inlineCollapsed={ collapsed }
            >
                {
                    router.map(
                        npx => {
                            return (
                                <SubMenu 
                                    key={ npx.path } 
                                    title={
                                        <span>
                                            <Icon type={ npx.icon ? npx.icon : 'user' } />
                                            <span>{ npx.meta }</span>
                                        </span>
                                    }
                                >
                                    {
                                        npx.role === '' || store[npx.role] ? 
                                        <MenuItem
                                            key={ npx.path }
                                            onClick = {
                                                () => this.props.history.push( npx.path )
                                            }
                                        >
                                            { npx.meta }
                                        </MenuItem> : ''
                                    }
                                    { 
                                        npx.children.map( 
                                            item => {
                                                return (
                                                    store[ item.role ] || item.role === '' ? (
                                                        <Menu.Item 
                                                            key={ npx.path + item.path } 
                                                            onClick={ 
                                                                () => this.props.history.push( npx.path + item.path ) 
                                                            }
                                                        >
                                                            { item.meta }
                                                        </Menu.Item> 
                                                    ) : ''
                                                )
                                            }
                                        )
                                    }
                                    
                                </SubMenu>
                            )
                        }
                    )
                }
            </Menu>
        )
    }
}

export default MenuComponent