import { combineReducers } from 'redux'
import search from 'reducers/search'
import band from 'reducers/band'
import favourite from 'reducers/favourite'
import favouriteBands from 'reducers/favouriteBands'
import events from 'reducers/events'
import { reducer as form } from 'redux-form'

export default combineReducers( {
    search,
    band,
    favouriteBands,
    events,
    favourite,
    form,
} )
