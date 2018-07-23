import React from 'react'
import LazyImage from 'components/common/lazyImage'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { mainColor } from 'components/variables/colors'


const BandContainer = styled.div`
    display: flex;
`
const BandThumb = styled.span`
    display: block;
    width: 160px;
    height: 160px;
    img {
        position: relative;
        max-width: 100%;
    }
`

const BandDetails = styled.div`
    display: block;
    width: auto;
    padding: 12px;
`

const BandName = styled.span`
    display: table;
    font-size: 3rem;
    a {
        color: #212121;
        text-decoration: none;
        &:hover{
            color: ${mainColor};
        }
    }
`

const BandUpcomingEvents = styled.span`
    display: table;
    font-size: 1.8rem;
    margin: 12px 0px;
`

export default ( props ) => {
    const {
        name,
        url,
        thumb_url,
        facebook_page_url,
        id,
        upcoming_event_count,
    } = props

    return (
        <BandContainer>
            <BandThumb>
                <Link to={ `/band/${id}` }>
                    <LazyImage width={ 160 } height={ 160 } image={ thumb_url } title={ name } />
                </Link>
            </BandThumb>
            <BandDetails>
                <BandName to={ `/band/${id}` }>
                    <Link to={ `/band/${id}` }>
                        { name }
                    </Link>
                </BandName>
                <BandUpcomingEvents>Upcoming events: <i>{ upcoming_event_count }</i></BandUpcomingEvents>
            </BandDetails>
        </BandContainer>
    )

}
