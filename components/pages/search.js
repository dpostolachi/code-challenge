import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { parse } from 'query-string'
import { searchBand, resetSearch } from 'actions/search'
import BandThumb from 'components/blocks/bandThumb'
import Container from 'components/common/container'
import Heading from 'components/common/heading'
import LazyImage from 'components/common/lazyImage'
import SearchForm from 'components/controls/searchForm'
import ResultsContainer from 'components/common/resultsContainer'
import Placeholder from 'components/common/placeholder'
import { mainColor } from 'components/variables/colors'
import { WithRoutePromises } from 'components/utils/routePromise'

@WithRoutePromises
@connect( ( store ) => store.search )

export default class SearchPage extends PureComponent {

    constructor ( props ) {

        super( props )

        const { query } = SearchPage.getParams( props.location.search )

        this.state = {
            query,
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

        const { fetched, pending } = nextProps

        if ( newQuery !== thisQuery || ( !fetched && !pending ) ) {

            // typeof window === 'undefined' is used to check if it's backend
            if ( typeof window === 'undefined' && nextProps.promises !== null ) {
                nextProps.promises.push( nextProps.dispatch( searchBand( newQuery ) ) )
            } else {
                nextProps.dispatch( searchBand( newQuery ) )
            }
        }

        return {
            query: newQuery
        }
    }

    componentWillUnmount(){
        // Reseting fetched and pending to false on unmount
        return this.props.dispatch( resetSearch() )

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
