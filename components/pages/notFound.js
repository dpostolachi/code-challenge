import React from 'react'
import Heading from 'components/common/heading'
import Container from 'components/common/container'

export default ( props ) => {

    // for setting 404 status on backend

    if ( props.staticContext )
        props.staticContext.is404 = true

    return (
        <Container>
            <Heading>404. Page not found</Heading>
        </Container>
    )
}
