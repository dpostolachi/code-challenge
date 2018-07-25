import React from 'react'
import LazyImage from 'components/common/lazyImage'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { mainColor } from 'components/variables/colors'
import { device } from 'components/variables/media'

const BandContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media ${device.mobileL}{
        flex-wrap: nowrap;
    }
    &:hover{
        background: #FAFAFA;
    }
`

const BandThumb = styled.span`
    display: block;
    height: 160px;
    width: 100%;
    margin: 24px 0px;
    text-align: center;
    @media ${device.mobileL}{
        width: 160px;
        margin: 0px;
    }
`

const BandDetails = styled.div`
    display: block;
    width: auto;
    padding: 12px;
`

const BandName = styled.span`
    display: table;
    font-size: 2.2rem;
    a {
        color: #212121;
        text-decoration: none;
        &:hover{
            color: ${ mainColor };
        }
    }
    @media ${device.tablet} {
      font-size: 3rem;
    }
`

const BandUpcomingEvents = styled.span`
    display: table;
    font-size: 1.6rem;
    margin: 12px 0px;
    > i {
        color: ${ mainColor };
        font-style: normal;
    }
    @media ${device.tablet} {
      font-size: 1.8rem;
    }
`

export default ( props ) => {
    const {
        name,
        thumb_url,
        upcoming_event_count,
    } = props

    return (
        <BandContainer>
            <BandThumb>
                <Link to={ `/band/${name}` }>
                    <LazyImage width={ 160 } height={ 160 } image={ thumb_url } title={ name } />
                </Link>
            </BandThumb>
            <BandDetails>
                <BandName>
                    <Link to={ `/band/${name}` }>
                        { name }
                    </Link>
                </BandName>
                <BandUpcomingEvents>Upcoming events: <i>{ upcoming_event_count }</i></BandUpcomingEvents>
            </BandDetails>
        </BandContainer>
    )

}
