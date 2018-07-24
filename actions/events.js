import { API_KEY, ARTISTS_URL } from 'settings/api'
import fetch from 'node-fetch'

// Fetching band's events
export const fetchEvents = ( bandName ) => {

    return ( dispatch ) => {

        dispatch( {
            type: 'EVENTS_PENDING'
        } )

        return fetch( `${ARTISTS_URL}/${bandName}/events/?app_id=${API_KEY}`, { cache: "force-cache" } )
        .then( ( resp ) => resp.json() )
        .then( ( data ) => {
            return ( data && !data.error ) ?
                dispatch( {
                    type: 'EVENTS_FULFILLED',
                    payload: data,
                } )
            : dispatch( {
                type: 'EVENTS_NO_RESULT',
                payload: null,
            } )
        } )
        .catch( (e ) => {
            return dispatch( {
                type: 'EVENTS_REJECTED',
            } )
        } )
    }

}
