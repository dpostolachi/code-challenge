import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from 'routes'
import { loadComponents } from 'loadable-components'
import { Provider } from 'react-redux'
import getState from 'store/get'

const loadableState = window.__LOADABLE_STATE__
const initialState = window.__REDUX_STATE__

const reduxStore = getState( initialState )

delete window.__REDUX_STATE__
// Register Service Worker for cache control
if ( 'serviceWorker' in navigator ) {
  navigator.serviceWorker.register('/service-worker.js')
}

// loadComponents for code splitting
loadComponents().then( () => {
    hydrate(
        <Provider store={ reduxStore }>
            <BrowserRouter>
                <Routes store={ reduxStore } loadableState={ loadableState } stylesheet={ null } />
            </BrowserRouter>
        </Provider>,
        document
    )
} )
