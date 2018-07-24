import reducer from './favouriteBands'

const FAVOURITE_BANDS_PENDING = {
    type: 'FAVOURITE_BANDS_PENDING'
}

const FAVOURITE_BANDS_REJECTED = {
    type: 'FAVOURITE_BANDS_REJECTED'
}

const FAVOURITE_BANDS_NO_RESULT = {
    type: 'FAVOURITE_BANDS_NO_RESULT'
}

const FAVOURITE_BANDS_FULFILLED = {
    type: 'FAVOURITE_BANDS_FULFILLED',
    payload: [ {
        name: 'some_band'
    } ]
}

describe( 'testing favouriteBands reducer', () => {
    it( 'should return the initial state', () => {
        expect( reducer( undefined, {} ) )
        .toEqual( {} )
    } )

    it( 'should set pending => true, fetched => false, data => null before request', () => {
        expect( reducer( {}, FAVOURITE_BANDS_PENDING ) )
        .toEqual( {
            pending: true,
            fetched: false,
            data: [],
        } )
    } )

    it( 'should set pending => false, fetched => true, data => [] on reject', () => {
        expect( reducer( {}, FAVOURITE_BANDS_REJECTED ) )
        .toEqual( {
            pending: false,
            fetched: true,
            data: [],
        } )
    } )

    it( 'should set pending => false, fetched => true, data => [] on "no results"', () => {
        expect( reducer( {}, FAVOURITE_BANDS_NO_RESULT ) )
        .toEqual( {
            pending: false,
            fetched: true,
            data: [],
        } )
    } )

    it( 'should set pending => false, fetched => true, data => [ bands ] on fulfilled', () => {
        expect( reducer( {}, FAVOURITE_BANDS_FULFILLED ) )
        .toEqual( {
            pending: false,
            fetched: true,
            data: [ {
                name: 'some_band'
            } ]
        } )
    } )
} )
