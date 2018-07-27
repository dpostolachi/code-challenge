import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { parse } from 'query-string'
import { fetchFavouriteBands } from 'actions/favouriteBands'
import BandThumb from 'components/blocks/bandThumb'
import SearchForm from 'components/controls/searchForm'
import Container from 'components/common/container'
import Heading from 'components/common/heading'
import LazyImage from 'components/common/lazyImage'
import ResultsContainer from 'components/common/resultsContainer'
import Placeholder from 'components/common/placeholder'
import { mainColor } from 'components/variables/colors'

@connect( ( store ) => {
    return {
        favouriteBands: store.favouriteBands,
        favourite: store.favourite,
    }
} )

export default class SearchPage extends PureComponent {

    constructor ( props ) {

        super( props )

        this.state = {
            bands: [],
        }

    }

    static getDerivedStateFromProps( nextProps, prevState ) {

        const { favourite } = nextProps
        const prevBands = ( prevState ) ? prevState.bands : []

        if ( favourite.toString() !== prevBands.toString() ) {
            nextProps.dispatch( fetchFavouriteBands( favourite ) )
        }
        return {
            bands: favourite
        }
    }

    render () {

        const { fetched, pending, data } = this.props.favouriteBands
        const { favourite } = this.props

        return (
            <Container>
                <Heading>Favourite bands</Heading>
                <ResultsContainer className={ ( pending ) ? 'loading' : null }>
                    { ( favourite.length === 0 ) ? <Placeholder>You have no favourite bands, yet</Placeholder> : (
                        ( fetched && data ) ? (
                            data.map( ( band, key ) => {
                                return <BandThumb { ...band } key={ key } />
                            } )
                        ) : (
                            <Placeholder>{ ( !fetched ) ? 'Loading...' : 'No events found' }</Placeholder>
                        )
                    )  }
                </ResultsContainer>
            </Container>
        )
    }
}
