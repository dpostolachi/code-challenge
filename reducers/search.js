// For displaying search result

export default ( state, action ) => {

    switch ( action.type ) {

        case 'SEARCH_PENDING':
            return { ...state, pending: true, fetched: false, data: null }

        case 'SEARCH_NO_RESULT':
            return { ...state, pending: false, fetched: true, data: null }

        case 'SEARCH_REJECTED':
            return { ...state, pending: false, fetched: true, data: null }

        case 'SEARCH_FULFILLED':
            return { ...state, pending: false, fetched: true, data: action.payload }

        case 'SEARCH_RESET':
            return { ...state, pending: false, fetched: false, data: null }

        default:
            return { ...state }
    }

}
