import React from 'react';
import { Route , Switch , Redirect } from 'react-router-dom'
import { asyncImport as sync } from '@/Plugins'

export const Container = sync( () => import( /* webpackChunkName: 'container' */ '@/Components/Container') )

export const RouteComponent = props => {
    return (
        <Switch>
            {
                props.router.children.map (
                    router => {
                        return (
                            <Route
                                path={ props.match.url + router.path }
                                key={ router.path }
                                { ...props }
                                component={
                                    npx => {
                                        return (
                                            <RouteChildrenComponent 
                                                router={ router }
                                                { ...npx }
                                            />
                                        )
                                    }
                                }
                            />
                        )
                    }
                )
            }
            {
                <Route 
                    component={ 
                        () => {
                            return <Container { ...props } component={ props.router.component } />
                        } 
                    } 
                /> 
            }
        </Switch>
    )
}

export const RouteChildrenComponent = props => {
    return (
        <Switch>
            {
                props.router.children.map(
                    npx => {
                        return (
                            <Route
                                path={ npx.path ? props.match.url + npx.path : '' }
                                key={ npx.meta }
                                component={
                                    props => {
                                        return (
                                            <Container { ...props } component={ npx.component } />
                                        )
                                    }
                                }
                            />
                        )
                    }
                )
            }
            {
                props.router.component ? 
                (
                    <Route 
                        render={ 
                            () => {
                                return (
                                    <Container { ...props } component={ props.router.component } /> 
                                )
                            }
                        }
                    />
                ) 
                : <Route render={ () => <Redirect to='/login' /> } />
            }
        </Switch>
    )
}