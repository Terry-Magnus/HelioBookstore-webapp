const INITIAL_STATE = {// inital state
    currentUser: null
}

const setCurrentUser = user => (//action creator
    {
        type: 'SET_CURRENT_USER',
        payload: user
    }
)
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default: return state
    }
}

export default userReducer