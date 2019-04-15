import React from 'react';
import { Route , Switch , withRouter } from 'react-router-dom'
import { asyncImport as sync } from '@/Plugins'

import routes from '@/Router/RouteConfig'
import { RouteComponent } from '@/Components/RouteComponent'

let Login = sync(() => import( /* webpackChunkName: 'login' */ '@/Pages/Login'))

@withRouter
class RouterComponents extends React.Component{
    
    render () {
        return (
            <Switch>
                {
                    routes.map(
                        router => {
                            return (
                                <Route
                                    path={ router.path }
                                    key={ router.path }
                                    component={
                                        props => {
                                            return (
                                                <RouteComponent 
                                                    router={ router } 
                                                    { ...props } 
                                                />
                                            )
                                        }
                                    }
                                />
                            )
                        }
                    )
                }
                <Route render={ () => <Login /> }  />
            </Switch>
        )
    }
}

export default RouterComponents;