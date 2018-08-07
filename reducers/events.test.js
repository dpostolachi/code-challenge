import reducer from './events'

const EVENTS_PENDING = {
    type: 'EVENTS_PENDING'
}

const EVENTS_REJECTED = {
    type: 'EVENTS_REJECTED'
}

const EVENTS_NO_RESULT = {
    type: 'EVENTS_NO_RESULT'
}

const EVENTS_FULFILLED = {
    type: 'EVENTS_FULFILLED',
    payload: [ {
        name: 'some_event'
    } ]
}

const BAND_RESET = {
    type: 'BAND_RESET',
}

describe( 'testing events reducer', () => {
    it( 'should return the initial state', () => {
        expect( reducer( undefined, {} ) )
        .toEqual( {} )
    } )

    it( 'should set pending => true, fetched => false, data => null before request', () => {
        expect( reducer( {}, EVENTS_PENDING ) )
        .toEqual( {
            pending: true,
            fetched: false,
            data: [],
        } )
    } )

    it( 'should set pending => false, fetched => true, data => [] on reject', () => {
        expect( reducer( {}, EVENTS_REJECTED ) )
        .toEqual( {
            pending: false,
            fetched: true,
            data: [],
        } )
    } )

    it( 'should set pending => false, fetched => true, data => [] on "no results"', () => {
        expect( reducer( {}, EVENTS_NO_RESULT ) )
        .toEqual( {
            pending: false,
            fetched: true,
            data: [],
        } )
    } )

    it( 'should set pending => false, fetched => true, data => [ events ] on fulfilled', () => {
        expect( reducer( {}, EVENTS_FULFILLED ) )
        .toEqual( {
            pending: false,
            fetched: true,
            data: [ {
                name: 'some_event'
            } ]
        } )
    } )

    it( 'should set pending => false, fetched => false, data => [] on reset', () => {
        expect( reducer( {}, BAND_RESET ) )
        .toEqual( {
            pending: false,
            fetched: false,
            data: []
        } )
    } )

} )
