import router from 'koa-router'
import Routes from 'routes'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import React from 'react'
import { getLoadableState } from 'loadable-components/server'
import { ServerStyleSheet } from 'styled-components'
import getStore from 'store/get'
import initialState from 'store/default'
import { Provider } from 'react-redux'
import { RoutePromiseProvider } from 'components/utils/routePromise'

const Router = new router()

const App = ( location, context, store , stylesheet, loadableState, appPromises ) => {
    return (
        <RoutePromiseProvider value={ { promises: appPromises } }>
            <Provider store={ store }>
                <StaticRouter location={ location } context={ context } >
                    <Routes store={ store } stylesheet={ stylesheet } loadableState={ loadableState } />
                </StaticRouter>
            </Provider>
        </RoutePromiseProvider>
    )
}

Router.get( '/*', async ( ctx ) => {

    const store = getStore( initialState )

    const AppPromises = []

    const sheet = new ServerStyleSheet()
    const context = {}

    // Collecting Stylsheet
    await sheet.collectStyles( App(ctx.url, context, store, null, null, null) )
    // Collecting loadable State for code splitting
    const loadableState = await getLoadableState( App( ctx.url, context, store, null, null, null ) )

    // Rendering App
    renderToString( App( ctx.url, context, store, sheet, loadableState, AppPromises ) )
    await Promise.all( AppPromises )
    const html = renderToString( App( ctx.url, context, store, sheet, loadableState, null ) )

    if ( context.is404 )
        ctx.status = 404

    ctx.body = `<!DOCTYPE html>${html}`

} )

export default ( app ) => {
    app.use( Router.routes() )
    app.use( Router.allowedMethods() )
}
