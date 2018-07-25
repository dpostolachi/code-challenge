import React from 'react'
import styled from 'styled-components'
import Container from 'components/common/container'
import Button from 'components/common/button'
import { mainColor } from 'components/variables/colors'
import { Link } from 'react-router-dom'
import { device } from 'components/variables/media'

const Badge = styled.span`
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    line-height: 64px;
    font-size: 1.4rem;
    color: ${ mainColor };
    font-weight: bold;
`

const Header = styled.header`
    line-height: 80px;
    background: #000;
    color: #fff;
    @media ${device.tablet} {
      margin-bottom: 80px
    }
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
`

const FavButton = styled(Button)`
    &:hover{
        > span{
            color: #ffffff;
        }
    }
`

export default ( props ) => {

    const { favourite } = props

    return (
        <Header>
            <Container>
                <Nav>
                    <Link to="/">
                        <Button color="#ffffff" hoverColor={ mainColor } hoverBackground="none" background="none" type="button">
                            <i className="icon icon-home" />
                        </Button>
                    </Link>
                    <Link to="/favourites">
                        <FavButton color="#ffffff" hoverColor={ mainColor } hoverBackground="none" background="none" type="button">
                            <i className="icon icon-heart" />
                            <Badge>{ favourite.length }</Badge>
                        </FavButton>
                    </Link>
                </Nav>
            </Container>
        </Header>
    )

}
