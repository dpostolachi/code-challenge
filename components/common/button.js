import styled from 'styled-components'
import { mainColor } from 'components/variables/colors'

export default styled.button`
    display: inline-block;
    vertical-align: middle;
    min-width: 64px;
    height 64px;
    border: none;
    padding 0px 12px;
    border-radius: 2px;
    font-size: 3rem;
    position: relative;
    color: ${ props => ( props.color ) ? props.color: '#ffffff' };
    background: ${ props => ( props.background ) ? props.background: mainColor };
    &:hover{
        color: ${ props => ( props.hoverColor ) ? props.hoverColor: '#ffffff' };
        background: ${ props => ( props.hoverBackground ) ? props.hoverBackground: mainColor };
    }
`
