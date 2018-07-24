import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchEvents } from './events'

const mockStore = configureMockStore( [ thunk ] )

describe( 'events actions', () => {

    it( 'should dispatch EVENTS_FULFILLED action', () => {

        const expectedActions = [
            {
                type: 'EVENTS_PENDING',
            }, {
                type: 'EVENTS_FULFILLED',
            }
        ]

        const store = mockStore( {} )

        return store.dispatch( fetchEvents( 'Maroon 5' ) )
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
