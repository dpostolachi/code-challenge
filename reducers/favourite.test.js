import reducer from './favourite'

const UPDATE_FAVORITES = {
    type: 'UPDATE_FAVORITES',
    payload: [ 'Some Band', 'Another Band' ]
}

describe( 'testing favourite reducer', () => {
    it( 'should return the initial state', () => {
        expect( reducer( undefined, {} ) )
        .toEqual( [] )
    } )

    it( 'should return an array of band on update', () => {
        expect( reducer( {}, UPDATE_FAVORITES ) )
        .toEqual( [ 'Some Band', 'Another Band' ] )
    } )

} )
