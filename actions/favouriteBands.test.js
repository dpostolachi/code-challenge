import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchFavouriteBands } from './favouriteBands'

const mockStore = configureMockStore( [ thunk ] )

describe( 'favouriteBands actions', () => {

    it( 'should dispatch FAVOURITE_BANDS_FULFILLED action', () => {

        const expectedActions = [
            {
                type: 'FAVOURITE_BANDS_PENDING',
            }, {
                type: 'FAVOURITE_BANDS_FULFILLED',
            }
        ]

        const store = mockStore( {} )

        return store.dispatch( fetchFavouriteBands( [ 'Maroon 5' , 'Pink' ] ) )
        .then( () => {
            expect( store.getActions().map( ( action ) => {
                const { type } = action
                return {
                    type,
                }
            } )).toEqual( expectedActions )
        } )
    } )


} )
