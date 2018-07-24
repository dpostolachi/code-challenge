import { API_KEY, ARTISTS_URL } from 'settings/api'
import fetch from 'node-fetch'
import cookies from 'browser-cookies'

export const fetchBand = ( bandName ) => {

    return ( dispatch ) => {

        dispatch( {
            type: 'FETCH_BAND_PENDING'
        } )

        return fetch( `${ARTISTS_URL}/${bandName}?app_id=${API_KEY}`, { cache: "force-cache" } )
        .then( ( resp ) => resp.json() )
        .then( ( data ) => {
            return ( data && !data.error ) ?
                dispatch( {
                    type: 'FETCH_BAND_FULFILLED',
                    payload: data,
                } )
            : dispatch( {
                type: 'FETCH_BAND_NO_RESULT',
                payload: null,
            } )
        } )
        .catch( (e ) => {
            return dispatch( {
                type: 'FETCH_BAND_REJECTED',
            } )
        } )
    }

}


const getBandsFromCookies = () => {
    let favBands = cookies.get('favouriteBands') || []
    if ( typeof favBands === 'string' )
        favBands = JSON.parse( favBands )
    return favBands
}

export const loadFavouriteBands = () => {
    return ( dispatch ) => {
        return dispatch( {
            type: 'UPDATE_FAVORITES',
            payload: getBandsFromCookies(),
        } )
    }
}

export const pushFavouriteBand = ( bandName ) => {

    return ( dispatch ) => {

        const favBands = getBandsFromCookies()

        if ( favBands.indexOf( bandName ) == -1 )
            favBands.unshift( bandName )
        else
            favBands.splice( favBands.indexOf( bandName ), 1 )

        cookies.set( 'favouriteBands', JSON.stringify( favBands ), { expires: 30 } )

        return dispatch( {
            type: 'UPDATE_FAVORITES',
            payload: favBands,
        } )

    }

}
