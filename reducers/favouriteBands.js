// For displaying favourite bands

export default ( state, action ) => {

    switch ( action.type ) {

        case 'FAVOURITE_BANDS_PENDING':
            return { ...state, pending: true, fetched: false }

        case 'FAVOURITE_BANDS_NO_RESULT':
            return { ...state, pending: false, fetched: true, data: [] }

        case 'FAVOURITE_BANDS_REJECTED':
            return { ...state, pending: false, data: [], fetched: true }

        case 'FAVOURITE_BANDS_FULFILLED':
            return { ...state, pending: false, data: action.payload, fetched: true }

        default:
            return { ...state }
    }

}
