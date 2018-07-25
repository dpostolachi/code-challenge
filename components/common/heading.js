import styled from 'styled-components'
import { device } from 'components/variables/media'

export default styled.h1`
    font-size: 2rem;
    font-weight: normal;
    margin: 24px 0px;
    @media ${device.tablet} {
      font-size: 3rem;
      margin: 32px 0px;
    }
`
