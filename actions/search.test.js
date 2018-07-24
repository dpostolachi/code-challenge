import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { searchBand } from './search'

const mockStore = configureMockStore( [ thunk ] )

describe( 'search actions', () => {

    it( 'should dispatch SEARCH_FULFILLED action', () => {

        const expectedActions = [
            {
                type: 'SEARCH_PENDING',
            }, {
                type: 'SEARCH_FULFILLED',
            }
        ]

        const store = mockStore( {} )

        return store.dispatch( searchBand( 'Maroon 5' ) )
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
