import React from 'react'
import { Route, Switch } from 'react-router'
import loadable from 'loadable-components'
import Layout from 'components/layout'

const Routes = [
    {
        path: '/',
        component: loadable( () => import( 'components/pages/home' ) ),
        exact: true,
    },
    {
        path: '/search',
        component: loadable( () => import( 'components/pages/search' ) ),
        exact: true,
    },
    {
        path: '/band/:band',
        component: loadable( () => import( 'components/pages/band' ) ),
        exact: true,
    },
]

export default ( props ) => {

    return (
        <Layout { ...props }>
            <Switch>
                {
                    Routes.map( ( route, key ) => {
                        return <Route { ...route } key={ key } />
                    } )
                }
            </Switch>
        </Layout>
    )
}
