// For displating band's events

export default ( state, action ) => {

    switch ( action.type ) {

        case 'EVENTS_PENDING':
            return { ...state, pending: true, fetched: false, data: [] }

        case 'EVENTS_NO_RESULT':
            return { ...state, pending: false, fetched: true, data: [] }

        case 'EVENTS_REJECTED':
            return { ...state, pending: false, fetched: true, data: [] }

        case 'EVENTS_FULFILLED':
            return { ...state, pending: false, fetched: true, data: action.payload }

        case 'BAND_RESET':
            return { ...state, pending: false, fetched: false, data: [] }

        default:
            return { ...state }
    }

}
