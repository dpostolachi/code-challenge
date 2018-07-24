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

const Router = new router()

const App = ( location, context, store , stylesheet, loadableState ) => {
    return (
        <Provider store={ store }>
            <StaticRouter location={ location } context={ context } >
                <Routes stylesheet={ stylesheet } loadableState={ loadableState } />
            </StaticRouter>
        </Provider>
    )
}

Router.get( '/*', async ( ctx ) => {

    const store = getStore( initialState )

    const sheet = new ServerStyleSheet()
    const context = {}

    // Collecting Stylsheet
    await sheet.collectStyles( App(ctx.url, context, store, null, null) )
    // Collecting loadable State for code splitting
    const loadableState = await getLoadableState( App( ctx.url, context, store, null, null ) )

    // Rendering App
    const html = renderToString( App( ctx.url, context, store, sheet, loadableState ) )

    // Checking for 404 error
    if ( context.is404 )
        ctx.status = 404

    ctx.body = `<!DOCTYPE html>${html}`

} )

export default ( app ) => {
    app.use( Router.routes() )
    app.use( Router.allowedMethods() )
}
