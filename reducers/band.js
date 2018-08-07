// For displaying band details

export default ( state, action ) => {

    switch ( action.type ) {

        case 'FETCH_BAND_PENDING':
            return { ...state, pending: true, fetched: false, data: null }

        case 'FETCH_BAND_NO_RESULT':
            return { ...state, pending: false, fetched: true, data: null }

        case 'FETCH_BAND_REJECTED':
            return { ...state, pending: false, fetched: true, data: null }

        case 'FETCH_BAND_FULFILLED':
            return { ...state, pending: false, fetched: true, data: action.payload }

        case 'BAND_RESET':
            return { ...state, pending: false, fetched: false, data: null }
            
        default:
            return { ...state }
    }

}
