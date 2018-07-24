import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchBand } from './band'

const mockStore = configureMockStore( [ thunk ] )

describe( 'band actions', () => {

    it( 'should dipatch FETCH_BAND_FULFILLED action', () => {

        const expectedActions = [
            {
                type: 'FETCH_BAND_PENDING',
            }, {
                type: 'FETCH_BAND_FULFILLED',
            }
        ]

        const store = mockStore( {} )

        return store.dispatch( fetchBand( 'Maroon 5' ) )
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
