import React from 'react'
import styled from 'styled-components'
import Container from 'components/common/container'
import Button from 'components/common/button'
import { mainColor } from 'components/variables/colors'
import { Link } from 'react-router-dom'

const Header = styled.header`
    line-height: 80px;
    background: #000;
    color: #fff;
    margin-bottom: 80px;
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
`

export default () => {

    console.log( mainColor )

    return (
        <Header>
            <Container>
                <Nav>
                    <Link to="/">
                        <Button color="#ffffff" hoverColor={ mainColor } hoverBackground="none" background="none" type="button">
                            <i className="icon icon-home" />
                        </Button>
                    </Link>
                    <Link to="/favorites">
                        <Button color="#ffffff" hoverColor={ mainColor } hoverBackground="none" background="none" type="button">
                            <i className="icon icon-heart" />
                        </Button>
                    </Link>
                </Nav>
            </Container>
        </Header>
    )

}
