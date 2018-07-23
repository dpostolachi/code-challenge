import React from 'react'
import styled from 'styled-components'
import Button from 'components/common/button'
import { mainColor, mainColorDark } from 'components/variables/colors'
import { Field, reduxForm } from 'redux-form'

const SearchForm = styled.form`
    display: flex;
    margin: 32px 0px;
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    line-height: 64px;
    padding: 12px;
    > input[type="text"] {
        display: inline-block;
        vertical-align: middle;
        width: 100%;
        line-height: 1;
        border: none;
        font-size: 2.4rem;
        padding: 0px 12px;
        background: #fff;
        color: #212121;
    }
`

const Form = ( props ) => {

    const { handleSubmit } = props

    return (
        <SearchForm onSubmit={ handleSubmit } method='get' action='/search'>
            <Field component='input' type="text" name='query' placeholder='Try "Maroon 5"' />
            <Button background={ mainColor } hoverBackground={ mainColorDark } type="submit">
                <i className="icon icon-search" />
            </Button>
        </SearchForm>
    )

}

const ReduxForm = reduxForm( {
    form: 'search',
    enableReinitialize: true,
    destroyOnUnmount: false
} )( Form )


export default ( props ) => {

    const { history, query } = props
    const initialValues = {
      query: query || '',
    }

    return <ReduxForm
        initialValues={ initialValues }
        onSubmit={ ( data ) => {
            const { query } = data
            return history.push( `/search?query=${query}` )
        } } />
}
