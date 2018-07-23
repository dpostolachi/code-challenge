import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from 'routes'
import { loadComponents } from 'loadable-components'
import { Provider } from 'react-redux'
import initialState from 'store/default'
import getState from 'store/get'

const loadableState = window.__LOADABLE_STATE__

loadComponents().then( () => {
    hydrate(
        <Provider store={ getState( initialState ) }>
            <BrowserRouter>
                <Routes loadableState={ loadableState } stylesheet={ null } />
            </BrowserRouter>
        </Provider>,
        document
    )
} )
