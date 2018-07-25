import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { parse } from 'query-string'
import { searchBand } from 'actions/search'
import BandThumb from 'components/blocks/bandThumb'
import Container from 'components/common/container'
import Heading from 'components/common/heading'
import LazyImage from 'components/common/lazyImage'
import SearchForm from 'components/controls/searchForm'
import ResultsContainer from 'components/common/resultsContainer'
import Placeholder from 'components/common/placeholder'
import { mainColor } from 'components/variables/colors'

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
            nextProps.dispatch( searchBand( newQuery ) )
        }
        return {
            query: newQuery
        }
    }

    render () {

        const { query } = this.state
        const { data, pending, history, fetched } = this.props
        return (
            <Container>
                <SearchForm history={ history } query={ query } />
                <Heading>Search result for "{ query }"</Heading>
                <ResultsContainer className={ ( pending ) ? 'loading' : null }>
                    {
                        ( fetched && data ) ? (
                            <BandThumb { ...data } />
                        ) : (
                            <Placeholder>{ ( !fetched ) ? 'Loading...' : 'No band found' }</Placeholder>
                        )
                    }
                </ResultsContainer>
            </Container>
        )
    }
}
