// For displating band's events

export default ( state, action ) => {

    switch ( action.type ) {

        case 'EVENTS_PENDING':
            return { ...state, pending: true, fetched: false }

        case 'EVENTS_NO_RESULT':
            return { ...state, pending: false, fetched: true, data: [] }

        case 'EVENTS_REJECTED':
            return { ...state, pending: false, data: [], fetched: true }

        case 'EVENTS_FULFILLED':
            return { ...state, pending: false, data: action.payload, fetched: true }

        default:
            return { ...state }
    }

}
