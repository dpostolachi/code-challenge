// For displaying search result

export default ( state, action ) => {

    switch ( action.type ) {

        case 'SEARCH_PENDING':
            return { ...state, pending: true, fetched: false }

        case 'SEARCH_NO_RESULT':
            return { ...state, pending: false, fetched: true, band: null }

        case 'SEARCH_REJECTED':
            return { ...state, pending: false, band: null, fetched: true }

        case 'SEARCH_FULFILLED':
            return { ...state, pending: false, band: action.payload, fetched: true }

        default:
            return { ...state }
    }

}
