import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    login_status: false,
    user: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ISLOGGEDIN:
            return {
                ...state,
                login_status: !state.login_status
            }
    }
}

const store = configureStore(reducer)