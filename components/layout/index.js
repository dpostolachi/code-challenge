import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { loadFavouriteBands } from 'actions/band'
import Header from 'components/controls/header'

const Html = styled.html`
    font-size: 62.5%;
    * {
        box-sizing: border-box;
        transition: all 0.2s ease-in-out;
        &:focus{
          outline: none;
        }
        &::-moz-focus-inner{
          border: none;
        }
    }
`

const Body = styled.body`
    font-size: 1.6rem;
    font-family: sans-serif;
    margin: 0;
    color: #212121;
`

@connect( ( store ) => {
    return { favourite: store.favourite }
} )

export default class Layout extends PureComponent {

    componentDidMount() {
        this.props.dispatch( loadFavouriteBands() )
    }

    render () {

        const { stylesheet, loadableState, favourite, store } = this.props

        return (
            <Html>
                <head>
                    <title>Code challenge</title>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <link rel="stylesheet" type="text/css" href="/public/fontello/css/fontello.css" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#b91d47" />
                    <meta name="theme-color" content="#ffffff" />
                    { ( stylesheet ) ? stylesheet.getStyleElement() : null }
                </head>
                <Body>
                    <Header favourite={ favourite }/>
                    { this.props.children }
                    <script dangerouslySetInnerHTML={ { __html: `window.__REDUX_STATE__ = ${ JSON.stringify( store.getState() ) };` } }/>
                    {
                        ( loadableState === null ) ? null
                            : ( loadableState.getScriptElement ) ? loadableState.getScriptElement()
                                : <script dangerouslySetInnerHTML={ { __html: `window.__LOADABLE_STATE__ = ${ JSON.stringify( loadableState ) };` } } />
                    }
                    <script src="/public/vendor.js" />
                    <script src="/public/client.js" />
                </Body>
            </Html>
        )
    }
}
