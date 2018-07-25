import React from 'react'
import { Route, Switch } from 'react-router'
import loadable from 'loadable-components'
import Layout from 'components/layout'

// loadable is used for code splitting, every page gets an separate script
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
        path: '/favourites',
        component: loadable( () => import( 'components/pages/favourites' ) ),
        exact: true,
    },
    {
        path: '/band/:band',
        component: loadable( () => import( 'components/pages/band' ) ),
        exact: true,
    },
    {
        path: '/',
        component: loadable( () => import( 'components/pages/notFound' ) ),
        exact: false,
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
