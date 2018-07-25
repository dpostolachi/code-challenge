import styled from 'styled-components'
import Spin from 'components/common/spin'
import { mainColor } from 'components/variables/colors'
import { device } from 'components/variables/media'

export default styled.div`
    display: block;
    border: 1px solid #e0e0e0;
    border-radius 2px;
    min-height: 160px;
    position: relative;
    margin: 32px 0px;
    &.loading:before{
        display: block;
        position: absolute;
        content: '';
        width: 32px;
        height: 32px;
        border-radius: 50%;
        animation: ${Spin} 2s linear infinite;
        border: 6px solid #E0E0E0;
        border-top: 6px solid ${mainColor};
        top: 16px;
        left: 50%;
        margin-left: -28px;
    }
    @media ${device.tablet} {
      margin: 60px 0px;
    }
`
