import { API_KEY, ARTISTS_URL } from 'settings/api'
import fetch from 'node-fetch'

// Fetch all favourite bands
export const fetchFavouriteBands = ( bandNames ) => {

    return ( dispatch ) => {

        dispatch( {
            type: 'FAVOURITE_BANDS_PENDING',
        } )

        return Promise.all( bandNames.map( ( bandName ) => {

            return new Promise( ( resolve, reject ) => {

                return fetch( `${ARTISTS_URL}/${bandName}?app_id=${API_KEY}`, { cache: "force-cache" } )
                .then( ( resp ) => resp.json() )
                .then( ( data ) => {
                    if ( data && !data.error ){
                        return resolve( data )
                    } else {
                        return reject( data.error )
                    }
                } )
                .catch( ( e ) => {
                    return reject( e )
                } )

            } )

        } ) )
        .then( ( bands ) => {
            if ( bands ) {
                return dispatch( {
                    type: 'FAVOURITE_BANDS_FULFILLED',
                    payload: bands,
                } )
            } else {
                return dispatch( {
                    type: 'FAVOURITE_BANDS_NO_RESULT',
                    payload: bands,
                } )
            }

        } )
        .catch( () => {
            return dispatch( {
                type: 'FAVOURITE_BANDS_REJECTED',
            } )
        } )

    }

}
