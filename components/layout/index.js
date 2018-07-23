import React from 'react'
import styled from 'styled-components'
import Header from 'components/controls/header'

const Html = styled.html`
    font-size: 62.5%;
    * {
        box-sizing: border-box;
        transition: all 0.2s ease-in-out;
    }
`

const Body = styled.body`
    font-size: 1.6rem;
    font-family: sans-serif;
    margin: 0;
    color: #212121;
`

export default ( props ) => {
    const { stylesheet, loadableState } = props
    return (
        <Html>
            <head>
                <title>Hello world</title>
                 <link rel="stylesheet" type="text/css" href="/public/fontello/css/fontello.css" />
                { ( stylesheet ) ? stylesheet.getStyleElement() : null }
            </head>
            <Body>
                <Header />
                { props.children }
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
