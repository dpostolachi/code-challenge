import React from 'react'
import styled from 'styled-components'
import { device } from 'components/variables/media'

const InnnerText = styled.span`
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
`

const Container = styled.div`
    display: block;
    text-align: center;
    color: #9E9E9E;
    font-size: 2rem;
    line-height: 160px;
    padding: 0px 12px;
    text-align: center;
    width: 100%;
    @media ${device.tablet} {
      font-size: 3rem;
    }
`

export default ( props ) => {
    return (
      <Container>
        <InnnerText { ...props } />
      </Container>
    )
}
