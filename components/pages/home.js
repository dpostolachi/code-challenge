import React, { PureComponent } from 'react'
import Container from 'components/common/container'
import SearchForm from 'components/controls/searchForm'
import Heading from 'components/common/heading'


export default ( props ) => {

    const { history } = props

    return (
        <Container>
            <Heading>Search for an artist</Heading>
            <SearchForm history={ history } />
        </Container>
    )

}
