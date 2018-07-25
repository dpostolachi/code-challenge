import React, { PureComponent } from 'react'
import Container from 'components/common/container'
import { connect } from 'react-redux'
import { fetchBand, pushFavouriteBand } from 'actions/band'
import { fetchEvents } from 'actions/events'
import styled, { keyframes } from 'styled-components'
import LazyImage from 'components/common/lazyImage'
import Button from 'components/common/button'
import Heading from 'components/common/heading'
import { mainColor, mainColorDark } from 'components/variables/colors'
import EventThumb from 'components/blocks/eventThumb'
import ResultsContainer from 'components/common/resultsContainer'
import Placeholder from 'components/common/placeholder'
import { device } from 'components/variables/media'

const EventsContainer = styled(ResultsContainer)`
    display: flex;
    flex-wrap: wrap;
    border: none;
    background: #F5F5F5;
    margin: 0px -12px;
    > span {
        display: block;
        width: 100%;
    }
`

const BandWall = styled.div`
    display: block;
    padding: 80px 0px;
    background: ${ ( props ) => ( props.image ) ? `url(${ props.image }) #FAFAFA` : '#FAFAFA' };
    @media ${device.tablet} {
        margin-top: -80px;
    }
`

const BandContainer = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media ${device.tablet} {
        flex-wrap: nowrap;
        justify-content: flex-start;
    }
`
const BandThumb = styled.div`
    display: block;
    height: 200px;
    width: 200px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .7);
    order: 1;
    @media ${device.tablet} {
        order: 0;
        width: 200px;
    }
`

const BandDetails = styled.div`
    display: block;
    padding: 6px 12px;
    order: 0;
    width: 100%;
    margin-bottom: 24px;
    @media ${device.tablet} {
        order: 1;
        width: auto;
    }
`

const BandTitle = styled.h1`
    display: block;
    color: #fff;
    font-size: 3rem;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, .7);
`

const BandButton = styled(Button)`
    border-radius: 50%;
    margin-right: 12px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .7);
    height: 42px;
    min-width: 42px;
    line-height: 42px;
    font-size: 2rem;
    padding: 0px;
`
const Spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

@connect( ( store ) => {
    return {
        search: store.search,
        band: store.band,
        favourite: store.favourite,
        events: store.events,
    }
} )

export default class BandPage extends PureComponent {

    constructor ( props ) {
        super( props )

        this.state = {
            band: null,
        }

    }

    toggleFavourite( bandName ) {
        return ( e ) => {
            e.preventDefault()
            this.props.dispatch( pushFavouriteBand( bandName ) )
        }
    }

    static getDerivedStateFromProps( nextProps, prevState ) {

        const { band } = nextProps.match.params
        const prevBand = ( prevState ) ? prevState.band : null

        if ( band !== prevBand ) {
            nextProps.dispatch( fetchBand( band ) )
            nextProps.dispatch( fetchEvents( band ) )
        }

        return {
            band: band
        }

    }

    render () {

        const { band, favourite, events } = this.props

        const { fetched, pending } = band

        if ( pending || !band.data ) {
            return (
                <Container>
                    <EventsContainer className={ ( pending ) ? 'loading' : null }>
                        <Placeholder>{ ( !fetched ) ? 'Loading...' : 'Band not found' }</Placeholder>
                    </EventsContainer>
                </Container>
            )
        } else {

            const { image_url, thumb_url, name, facebook_page_url } = band.data

            const inFavourites = favourite.indexOf( name ) > -1

            return (
                <div>
                    <BandWall image={ image_url }>
                        <BandContainer>
                            <BandThumb>
                                <LazyImage width={ 200 } height={ 200 } image={ thumb_url } title={ name } />
                            </BandThumb>
                            <BandDetails>
                                <BandTitle>{ name }</BandTitle>
                                { ( facebook_page_url ) ? (
                                    <a href={ facebook_page_url } target='_blank'>
                                        <BandButton type='button' background='#ffffff' color={ mainColor }>
                                            <i className='icon icon-facebook' />
                                        </BandButton>
                                    </a>
                                ) : null }
                                <BandButton
                                    type='button' background={ ( inFavourites ) ? mainColor : '#ffffff' } color={ ( inFavourites ) ? '#ffffff' : mainColor }
                                    onClick={ this.toggleFavourite( name ) }
                                >
                                    <i className='icon icon-heart' />
                                </BandButton>
                            </BandDetails>
                        </BandContainer>
                    </BandWall>
                    <Container>
                        <Heading>Events</Heading>
                        <EventsContainer className={ ( events.pending ) ? 'loading' : null }>
                            {
                                ( events.fetched && events.data.length ) ? (
                                    events.data.map( ( event, key ) => {
                                        return <EventThumb { ...event } key={ key } />
                                    } )
                                ) : (
                                    <Placeholder>{ ( !events.fetched ) ? 'Loading...' : 'No events found' }</Placeholder>
                                )
                            }
                        </EventsContainer>
                    </Container>
                </div>
            )
        }
    }

}
