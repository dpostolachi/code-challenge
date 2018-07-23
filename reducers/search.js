export default ( state, action ) => {

    switch ( action.type ) {

        case 'SEARCH_PENDING':
            return { ...state, pending: true }

        case 'SEARCH_REJECTED':
            return { ...state, pending: false, band: null }

        case 'SEARCH_FULFILLED':
            return { ...state, pending: false, band: action.payload }

        default:
            return { ...state }
    }

}
