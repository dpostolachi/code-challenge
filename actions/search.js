import { API_KEY, ARTISTS_URL } from 'settings/api'
import { get } from 'actions/utils'

// Reset search
export const resetSearch = () => {

    return ( dispatch ) => {

        return dispatch( {
            type: 'SEARCH_RESET',
        } )

    }
}

// Searching for band
export const searchBand = ( bandName ) => {

    return ( dispatch ) => {

        dispatch( {
            type: 'SEARCH_PENDING'
        } )

        return get( `${ARTISTS_URL}/${bandName}?app_id=${API_KEY}` )
        .then( ( resp ) => resp.json() )
        .then( ( data ) => {
            return ( data && !data.error ) ?
                dispatch( {
                    type: 'SEARCH_FULFILLED',
                    payload: data,
                } )
            : dispatch( {
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
