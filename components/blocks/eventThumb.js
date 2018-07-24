import React from 'react'
import LazyImage from 'components/common/lazyImage'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { mainColor } from 'components/variables/colors'
import moment from 'moment'
import { device } from 'components/variables/media'

const EventContainer = styled.div`
    display: block;
    width: 100%;
    padding: 12px 12px 40px;
    background: #080808;
    min-height: 200px;
    border-bottom: 1px solid #000;
    &:nth-child(2n){
        background: #121212;
    }
    &:hover{
        background: #000000;
    }
    @media ${device.mobileS} {
        width: 100%;
    }
    @media ${device.mobileL} {
        width: 50%;
    }
    @media ${device.tablet} {
        width: 33.333%;
    }
    @media ${device.laptop} {
        width: 25%;
    }
`

const EventName = styled.div`
    font-size: 2.6rem;
    color: ${mainColor};
    margin: 12px 0px;
    line-height: 3rem;
    text-transform: uppercase;
`

const EventDate = styled.div`
    display: block;
    font-size: 1.8rem;
    color: #E0E0E0;
    margin: 12px 0px;
`

const EventCountry = styled.div`
    display: block;
    margin: 12px 0px 6px;
    color: #9E9E9E;
    font-size: 1.8rem;
`
const EventCity = styled.div`
    display: block;
    margin: 6px 0px 12px;
    color: #757575;
    font-size: 1.5rem;
`

const LinupHeading = styled.div`
    display: block;
    font-size: 1.8rem;
    margin: 24px 0px 6px;
    color: #424242;
`

const LineupBand = styled.div`
    display: block;
    font-size: 1.6rem;
    line-height: 2rem;
    > a {
        color: #9E9E9E;
        text-decoration: none;
        &:hover{
            color: ${mainColor};
        }
    }
`

const LineupMore = styled.div`
    display: block;
    font-size: 1.6rem;
    line-height: 2rem;
    color: #757575;
`

export default ( props ) => {
    const { venue: { name, country, region, city, latitude, longitude }, datetime, description, lineup } = props
    return (
        <EventContainer>
            <EventDate>{ moment( datetime ).format('D MMM') }</EventDate>
            <EventName>{ name }</EventName>
            <EventCountry>{ country }</EventCountry>
            <EventCity>{ city }{ ( region ) ? `, ${region}` : null }</EventCity>
            {
                ( lineup.length > 1 ) ? (
                    [
                        <LinupHeading key={ 0 }>Lineup:</LinupHeading>,
                        lineup.splice(0, 10).map( ( band, key ) => {
                            return (
                                <LineupBand key={ key }>
                                    <Link to={ `/band/${band}` }>{ band }</Link>
                                </LineupBand>
                            )
                        } ),
                        ( lineup.length > 10 ) ? <LineupMore>and { lineup.length - 10 } more</LineupMore> : null
                    ]
                ) : null
            }
        </EventContainer>
    )

}
