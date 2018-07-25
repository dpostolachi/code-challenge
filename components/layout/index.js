import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Header from 'components/controls/header'
import { connect } from 'react-redux'
import { loadFavouriteBands } from 'actions/band'

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

        const { stylesheet, loadableState, favourite } = this.props

        return (
            <Html>
                <head>
                    <title>Code challenge</title>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <link rel="stylesheet" type="text/css" href="/public/fontello/css/fontello.css" />
                    { ( stylesheet ) ? stylesheet.getStyleElement() : null }
                </head>
                <Body>
                    <Header favourite={ favourite }/>
                    { this.props.children }
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
