import { API_KEY, ARTISTS_URL } from 'settings/api'
import fetch from 'node-fetch'

export const searchArtist = ( artistName ) => {

    return ( dispatch ) => {

        dispatch( {
            type: 'SEARCH_PENDING'
        } )

        return fetch( `${ARTISTS_URL}/${artistName}?app_id=${API_KEY}` )
        .then( ( resp ) => resp.json() )
        .then( ( data ) => {
            return ( data ) ? (
                dispatch( {
                    type: 'SEARCH_FULFILLED',
                    payload: data,
                } )
            ) : dispatch( {
                type: 'SEARCH_NO_RESULT',
                payload: null,
            } )
        } )
        .catch( (e ) => {
            return dispatch( {
                type: 'SEARCH_REJECTED',
            } )
        } )
    }

}
