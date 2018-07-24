// For synchronizing redux with cookies

export default ( state = [], action ) => {
    switch ( action.type ) {

        case 'UPDATE_FAVORITES':
            return [ ...action.payload ]

        default:
            return [ ...state ]
    }

}
