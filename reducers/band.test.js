import reducer from './band'

const FETCH_BAND_PENDING = {
    type: 'FETCH_BAND_PENDING'
}

const FETCH_BAND_REJECTED = {
    type: 'FETCH_BAND_REJECTED'
}

const FETCH_BAND_NO_RESULT = {
    type: 'FETCH_BAND_NO_RESULT'
}

const FETCH_BAND_FULFILLED = {
    type: 'FETCH_BAND_FULFILLED',
    payload: {
        name: 'some_name'
    }
}

const BAND_RESET = {
    type: 'BAND_RESET',
}

describe( 'testing band reducer', () => {
    it( 'should return the initial state', () => {
        expect( reducer( undefined, {} ) )
        .toEqual( {} )
    } )

    it( 'should set pending => true, fetched => false, data => null before request', () => {
        expect( reducer( {}, FETCH_BAND_PENDING ) )
        .toEqual( {
            pending: true,
            fetched: false,
            data: null,
        } )
    } )

    it( 'should set pending => false, fetched => true, data => null on reject', () => {
        expect( reducer( {}, FETCH_BAND_REJECTED ) )
        .toEqual( {
            pending: false,
            fetched: true,
            data: null,
        } )
    } )

    it( 'should set pending => false, fetched => true, data => null on "no results"', () => {
        expect( reducer( {}, FETCH_BAND_NO_RESULT ) )
        .toEqual( {
            pending: false,
            fetched: true,
            data: null,
        } )
    } )

    it( 'should set pending => false, fetched => true, data => object on fulfilled', () => {
        expect( reducer( {}, FETCH_BAND_FULFILLED ) )
        .toEqual( {
            pending: false,
            fetched: true,
            data: {
                name: 'some_name'
            },
        } )
    } )

    it( 'should set pending => false, fetched => false, data => null on reset', () => {
        expect( reducer( {}, BAND_RESET ) )
        .toEqual( {
            pending: false,
            fetched: false,
            data: null,
        } )
    } )

} )
