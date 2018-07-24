import reducer from './search'

const SEARCH_PENDING = {
    type: 'SEARCH_PENDING'
}

const SEARCH_REJECTED = {
    type: 'SEARCH_REJECTED'
}

const SEARCH_NO_RESULT = {
    type: 'SEARCH_NO_RESULT'
}

const SEARCH_FULFILLED = {
    type: 'SEARCH_FULFILLED',
    payload: {
        name: 'some_name'
    }
}

describe( 'testing search reducer', () => {
    it( 'should return the initial state', () => {
        expect( reducer( undefined, {} ) )
        .toEqual( {} )
    } )

    it( 'should set pending => true, fetched => false, data => null before request', () => {
        expect( reducer( {}, SEARCH_PENDING ) )
        .toEqual( {
            pending: true,
            fetched: false,
            data: null,
        } )
    } )

    it( 'should set pending => false, fetched => true, data => null on reject', () => {
        expect( reducer( {}, SEARCH_REJECTED ) )
        .toEqual( {
            pending: false,
            fetched: true,
            data: null,
        } )
    } )

    it( 'should set pending => false, fetched => true, data => null on "no results"', () => {
        expect( reducer( {}, SEARCH_NO_RESULT ) )
        .toEqual( {
            pending: false,
            fetched: true,
            data: null,
        } )
    } )

    it( 'should set pending => false, fetched => true, data => object on fulfilled', () => {
        expect( reducer( {}, SEARCH_FULFILLED ) )
        .toEqual( {
            pending: false,
            fetched: true,
            data: {
                name: 'some_name'
            },
        } )
    } )
} )
