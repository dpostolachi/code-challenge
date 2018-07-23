import { combineReducers } from 'redux'
import search from 'reducers/search'
import { reducer as form } from 'redux-form'

export default combineReducers( {
    search,
    form
} )
