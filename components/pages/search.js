import React, { PureComponent } from 'react'
import Container from 'components/common/container'
import Heading from 'components/common/heading'
import { parse } from 'query-string'
import { searchArtist } from 'actions/artist'
import { connect } from 'react-redux'
import LazyImage from 'components/common/lazyImage'
import BandThumb from 'components/blocks/bandThumb'
import styled, { keyframes } from 'styled-components'
import { mainColor } from 'components/variables/colors'
import SearchForm from 'components/controls/searchForm'

const Spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

const SearchResults = styled.div`
    display: block;
    border: 1px solid #e0e0e0;
    border-radius 2px;
    min-height: 160px;
    position: relative;
    margin: 60px 0px;
    &.loading:before{
        display: block;
        position: absolute;
        content: '';
        width: 64px;
        height: 64px;
        border-radius: 50%;
        animation: ${Spin} 2s linear infinite;
        border: 8px solid #E0E0E0;
        border-top: 8px solid ${mainColor};
        top: 50%;
        left: 50%;
        margin-left: -32px;
        margin-top: -32px;
    }
`

@connect( ( store ) => store.search )

export default class SearchPage extends PureComponent {

    constructor ( props ) {

        super( props )

        this.state = {
            query: null,
        }

    }

    static getParams ( search ) {

        const params = parse( search )

        return {
            query: params.query || ''
        }

    }

    static getDerivedStateFromProps( nextProps, prevState ) {
        const newQuery = SearchPage.getParams( nextProps.location.search ).query
        const thisQuery = ( prevState ) ? prevState.query : null

        if ( newQuery !== thisQuery ) {
            console.log( 'fetching' )
            nextProps.dispatch( searchArtist( newQuery ) )
        }
        return {
            query: newQuery
        }
    }

    render () {

        const { query } = this.state
        const { band, pending, history } = this.props
        return (
            <Container>
                <SearchForm history={ history } query={ query } />
                <Heading>Search result for "{ query }"</Heading>
                <SearchResults className={ ( pending ) ? 'loading' : null }>
                    {
                        ( !pending && band ) ? (
                            <BandThumb { ...band } />
                        ) : null
                    }
                </SearchResults>
            </Container>
        )
    }
}
