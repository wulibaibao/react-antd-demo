import React from 'react';
import { inject , observer} from 'mobx-react';
import { Route , Redirect , Switch , withRouter} from 'react-router-dom'
import loadable from 'react-loadable'

function asyncImport( loader ){
    function Loading(props) {
        if (props.error) 
            return <div>Error!</div>;
        else if (props.pastDelay) 
            return <div>Loading...</div>;
        else 
            return null;
    }

    return loadable({
        loader,
        loading: Loading,
    })
}

const ContainerComponent = asyncImport( () => import( /* webpackChunkName: 'container' */ '@/Components/Container') )

const Config = [
    {
        path : '/index',
        component : asyncImport( () => import( /* webpackChunkName: 'index' */ '@/Pages/Home') ),
    },
    {
        path : '/user',
        component : asyncImport( () => import( /* webpackChunkName: 'user' */ '@/Pages/User') ),
    },
    {
        path : '/login',
        component : asyncImport( () => import( /* webpackChunkName: 'login' */ '@/Pages/Login') ),
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
                                exact
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