import React from 'react';
import { inject , observer} from 'mobx-react';
import { Route , Redirect , Switch , withRouter} from 'react-router-dom'

import ContainerComponent from '@/Components/Container'

import User from '@/Pages/User'
// import UserFirst from '@/Pages/User/FirstComponent'
import Home from '@/Pages/Home'
// import HomeFirst from '@/Pages/Home/FirstComponent'
import Login from '@/Pages/Login'

const Config = [
    {
        path : '/index',
        component : Home,//
        // children : [
        //     {
        //         path : '/first',
        //         component : HomeFirst,
        //     }
        // ]
    },
    {
        path : '/user',
        component : User,//
        // children : [
        //     {
        //         path : '/first',
        //         component : UserFirst,
        //     }
        // ]
    },
    {
        path : '/login',
        component : Login,//
    },
]

@withRouter
@inject('store')
@observer
class RouterComponents extends React.Component{
    requireAuth( component , props ){
        return <ContainerComponent component={ component } { ...props } />;
    }

    render(){
        return (
            <Switch>
                {
                    Config.map( 
                        item => (
                            <Route 
                                path={ item.path } 
                                key={ item.path } 
                                component={ 
                                    props => this.requireAuth( item.component , props) 
                                } 
                            >
                                {/* {
                                    item.length > 0 ?
                                    item.map( 
                                        ctx => (
                                            <Route
                                                path={ ctx.path }
                                                key={ ctx.path }
                                                component={ ctx.component }
                                            >
                                            </Route>
                                        )
                                    )
                                    : ''
                                } */}
                            </Route>
                        )
                    )
                }
                <Route render={ () => <Redirect to='/login' /> } />
            </Switch>
        )
    }
}

export default RouterComponents;