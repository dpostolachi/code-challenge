import { applyMiddleware, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'
import Promise from 'redux-promise-middleware'
import reducers from 'reducers'

const middleware = applyMiddleware( Promise(), ReduxThunk )

export default ( initialState ) => {
    return createStore( reducers, initialState, middleware )
}
